const path = require('path')
// ki importer express mn module
const express = require("express")
// ki importer dotenv باش نستعمل variables mn .env
const dotenv = require("dotenv")
const color = require("colors")
const asyncHandler = require('express-async-handler')
const connect= require("./config/db")
// kn3ayt 3la errorHandler 
const { errorHandler } = require("./middleware/Errormiddleware")

// ki nload variables mn .env
dotenv.config({ path: "./.env" })

// ki nحدد port mn .env أو 9001 إيلا ما موجود
const _PORT = process.env.PORT || 9001

// had start l'connection m3a database
connect()

// ki nsawb express app
const app = express()

// midlwaire
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// ki nستخدم router dyal goals على المسار '/api/goals'
app.use('/api/goals',require('./routes/goeal'))
app.use('/api/users',require('./routes/user'))

// serve frontend f production mode
if(process.env.NODE_ENV === 'production'){
    const __dirnameStatic = path.resolve(); 
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

}else{
    app.get('/', (req, res) => {
        res.send('API is running....')}
    )
}


app.use(errorHandler)

// ki nshilo server على _PORT
app.listen(_PORT, () => {
    console.log(`start server whit ${_PORT}`)
}) 