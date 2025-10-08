const mongoose = require("mongoose")
const dotenv = require("dotenv")
const color = require("colors")
const asyncHandler = require('express-async-handler')

// ki nload variables mn .env
dotenv.config({ path: "./.env" })

// ki nconnectiw m3a mongoDB
const connectDB= asyncHandler (async ()=>{
    const conn = await mongoose.connect(process.env.Mongo_URI)
    console.log(`MongoDB connect whit : ${conn.connection.host}`.cyan.underline);
    
}) 

module.exports = connectDB