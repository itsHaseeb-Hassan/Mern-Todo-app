import User from '../models/userModel.js'
import createHttpError from 'http-errors'
import bcrypt from 'bcrypt'

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
        const err=createHttpError(500,"Internal Server Error")
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
     const err=createHttpError(500,"Internal Server Error")
     return next(res.json({err}))
   }


}