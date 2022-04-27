const mongoose = require('mongoose')

const WorkerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rate: {type: Number},
    hours: {type: Number}
})

const Worker = mongoose.model('worker', WorkerSchema)
module.exports = Worker