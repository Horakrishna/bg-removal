import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongoDb.js'
import userRouter from './routes/userRoutes.js'

//App Config

const port = process.env.PORT || 4000
const app =express()
await connectDB();

//MidleWares
app.use(express.json())
app.use(cors())

//Api Route
app.get('/',(req,res)=>res.send("Api is working"))
app.use("/api/user",userRouter)

app.listen(port, ()=>console.log("server Runnig on Port" + port))
