import User from '../models/userModel.js'
import createHttpError from 'http-errors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser=async(req,res,next)=>{

    const {name,email,password}=req.body
// Validation
    try {
        if(!name || !email || !password){
        const error=createHttpError(400,"All Fields Are Required")
        return next(res.json({error}))
        }
    } catch (error) {
        const err=createHttpError(500,"Internal Server Error")
        return next(res.json({err}))
    }
    // check if User Exist
    let existingUser
    try {
        existingUser=await User.findOne({email})
        if(existingUser){
            const err=createHttpError(400,"User Already Exist")
            return next(res.json({err}))
        }
    } catch (error) {
        const err=createHttpError(500,"Existing User Check Failed")
        return next(res.json({err}))
    }
// Hash Password
   const hashedPassword=await bcrypt.hash(password,10)
   let newUser;
   try {
     newUser=await User.create({
        name,
        email,
        password:hashedPassword
    })
   } catch (error) {
     const err=createHttpError(500,"User Creation Failed")
     return next(res.json({err}))
   }
// Genrate Token refreshToken and accessToken

try {
    const accessToken= jwt.sign({id:newUser._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    const refreshToken= jwt.sign({id:newUser._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'})
    await newUser.updateOne({refreshToken})
    res.status(201).json({accessToken,refreshToken})  
} catch (error) {
    const err=createHttpError(500,"Token Generation Failed")
    return next(res.json({err}))
}

}
export {createUser}