const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
    description: {type: String},
    image: { type: String},
    cost: {type: Number}
})

const JobsiteSchema = new mongoose.Schema({
    name: {type: String,},
    jobs: [jobsSchema],
    
})

const Jobsite = mongoose.model('Jobsite', JobsiteSchema)
module.exports = Jobsite