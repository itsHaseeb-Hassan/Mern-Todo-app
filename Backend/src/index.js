import express from 'express'
import { configDotenv } from 'dotenv'
import userRouter from './routes/userRoute.js'
import connectDB from './config/db/db.js'

configDotenv()

const app=express()

app.use(express.json())

app.use('/api/users',userRouter)


connectDB().then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))
}).catch((error)=>{
    console.log(`Error:${error.message}`)
})