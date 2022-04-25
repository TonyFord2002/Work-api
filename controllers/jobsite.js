const express = require('express')
const router = express.Router()
const Jobsites = require('../models/jobsites')

//Index
router.get('/',(req, res)=>{
    Jobsites.find({}, (err, foundJobsite)=>{
        res.json(foundJobsite)
    })
})

//Delete
router.delete('/:id', (req,res)=>{
    Jobsites.findByIdAndRemove(req.params.id, (err, deleteJobsite)=>{   res.json(deleteJobsite)
    })
})

//Update
router.put('/:id', (req,res)=>{
    Jobsites.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updateJobsite)=>{res.json(updateJobsite)
    })
})

//Create
router.post('/',(req,res)=>{
    Jobsites.create(req.body,(err, createdJobsite)=>{
        res.json(createdJobsite)
    })
})

//Show
router.get('/:id',(req,res)=>{
    Jobsites.findById(req.params.id, (err, foundJobsite)=>{
        res.json(foundJobsite)
    })
})

module.exports = router