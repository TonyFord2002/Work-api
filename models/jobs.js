const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    description: {type: String},
    image: { type: String},
    cost: {type: Number},
    jobsiteId:{type: String}
})

const Job = mongoose.model('Job', JobSchema)
module.exports = Job