import User from '../models/userModel.js'
import createHttpError from 'http-errors'

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
}