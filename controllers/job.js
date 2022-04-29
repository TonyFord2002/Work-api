const express = require('express')
const router = express.Router()
const Job = require('../models/jobs')

//Index
router.get('/jobsiteid/:id',(req, res)=>{
    Job.find({jobsiteId: req.params.id}, (err, foundJob)=>{
        res.json(foundJob)
    })
})

//Delete
router.delete('/:id', (req,res)=>{
    Job.findByIdAndRemove(req.params.id, (err, deleteJob)=>{   res.json(deleteJob)
    })
})

//Update
router.put('/:id', (req,res)=>{
    Job.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updateJob)=>{res.json(updateJob)
    })
})

//Create
router.post('/',(req,res)=>{
    Job.create(req.body,(err, createdJob)=>{
        res.json(createdJob)
    })
})

//Show
router.get('/:id',(req,res)=>{
    Job.findById(req.params.id, (err, foundJob)=>{
        res.json(foundJob)
    })
})

module.exports = router