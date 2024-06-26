import express from 'express'
import { configDotenv } from 'dotenv'
import userRouter from './routes/userRoute.js'
import todoRouter from './routes/todoRoute.js'
import connectDB from './config/db/db.js'
import cors from 'cors'

configDotenv()

const app=express()

app.use(express.json())
app.use(cors())

app.use('/api/users',userRouter)
app.use('/api/todos',todoRouter)



connectDB().then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))
}).catch((error)=>{
    console.log(`Error:${error.message}`)
})