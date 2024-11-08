import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongoDb.js'

//App Config

const PORT = process.env.PORT || 4000
const app =express()
await connectDB()

//MidleWares
app.use(express.json())
app.use(cors())

//Api Route
app.get('/',(req,res) =>res.send("Api is working"))
app.listen(PORT, ()=>console.log("server Runnig on Port" +PORT))
