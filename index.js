import express from 'express'
import dotenv from 'dotenv'
dotenv.config({})
import bookRouter from './src/modules/Book/book.routes.js'
import userRouter from  './src/modules/user/user.routes.js'
import { connection } from '../Bookstore/dataBase/connection.js'




const app = express()
const port = 3000



connection();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api/v1/Book", bookRouter)
app.use("/api/v1/User", userRouter)















app.listen(port,()=>{
console.log("server running");


})
