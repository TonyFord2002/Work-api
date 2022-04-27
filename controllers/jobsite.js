const express = require('express')
const router = express.Router()
const Jobsite = require('../models/jobsites')
const Worker = require('../models/workers')

//Index
router.get('/',(req, res)=>{
    Jobsite.find({}, (err, foundJobsite)=>{
        res.json(foundJobsite)
    })
})


//Delete
router.delete('/:id', (req,res)=>{
    Jobsite.findByIdAndRemove(req.params.id, (err, deleteJobsite)=>{   res.json(deleteJobsite)
    })
})

//Update
router.put('/:id', (req,res)=>{
    Jobsite.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updateJobsite)=>{res.json(updateJobsite)
    })
})

//Create
router.post('/',(req,res)=>{
    Jobsite.create(req.body,(err, createdJobsite)=>{
        res.json(createdJobsite)
    })
})

//Show
router.get('/:id',(req,res)=>{
    Jobsite.findById(req.params.id, (err, foundJobsite)=>{
        res.json(foundJobsite)
    })
})

module.exports = router