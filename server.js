require('dotenv').config()
const mongoURI = process.env.MONGO_URI
const mongoose = require('mongoose')
const db = mongoose.connection
const express = require ('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const app = express()

//Connect to MongoDB
mongoose.connect(mongoURI, {useNewUlParser: true},
    ()=> console.log('Connected to MongoDB', mongoURI))

//Error or Disconnected
db.on('error', err => console.log(err.message + ' is MongoDB not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//Routes
const jobsiteController = require ('./controllers/jobsite.js')
app.use('/workapp', jobsiteController)

//Comfirmation of port working
app.listen(PORT, ()=>{
    console.log('Making that money on port: ', PORT)
})