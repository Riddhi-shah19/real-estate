import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
// import userRouter from './routes/user.route'
import authRouter from './routes/auth.route'

const app=express()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

// app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
