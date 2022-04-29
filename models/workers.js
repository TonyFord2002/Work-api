const mongoose = require('mongoose')

const WorkerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rate: {type: Number},
    hours: {type: Number},
    jobId: {type: String},
    jobsiteId: {type: String}
})

const Worker = mongoose.model('Worker', WorkerSchema)
module.exports = Worker