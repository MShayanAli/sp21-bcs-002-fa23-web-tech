import express, { urlencoded } from "express";
import userRouter from './routes/Users.js'
import productRouter from './routes/Products.js'
import cors from 'cors'       
import { config } from 'dotenv' 

config({path:"./data/config.env"})
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/Products",productRouter)
app.use("/Users",userRouter)

export default app;