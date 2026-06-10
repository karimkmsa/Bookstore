import express from 'express'
import dotenv from 'dotenv'
dotenv.config({})

import { connection } from '../Bookstore/dataBase/connection.js'




const app = express()
const port = 3000



connection();
















app.listen(port,()=>{
console.log("server running");


})
