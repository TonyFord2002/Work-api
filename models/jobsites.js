const mongoose = require('mongoose')

const JobsiteSchema = new mongoose.Schema({
    name: {type: String,},
})

const Jobsite = mongoose.model('Jobsite', JobsiteSchema)
module.exports = Jobsite