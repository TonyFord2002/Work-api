const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    job: {type: String, required: true},
    image: { type: String},
    cost: {type: Number}
})

const workerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rate: {type: Number},
    hours: {type: Number}
})

const JobsiteSchema = new mongoose.Schema({
    name: {type: String,},
    job: [jobSchema],
    worker: [workerSchema]
})

const Jobsite = mongoose.model('Jobsite', JobsiteSchema)
module.exports = Jobsite