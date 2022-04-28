const express = require('express')
const router = express.Router()
const Worker = require('../models/workers')

//Index
router.get('/',(req, res)=>{
    Worker.find({}, (err, foundWorkers)=>{
        res.json(foundWorkers)
    })
})

//Delete
router.delete('/:id', (req,res)=>{
    Worker.findByIdAndRemove(req.params.id, (err, deleteWorker)=>{   res.json(deleteWorker)
    })
})

//Update
router.put('/:id', (req,res)=>{
    Worker.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updateWorker)=>{res.json(updateWorker)
    })
})

//Create
router.post('/',(req,res)=>{
    Worker.create(req.body,(err, createdWorker)=>{
        res.json(createdWorker)
    })
})

//Show
router.get('/:id',(req,res)=>{
    Worker.findById(req.params.id, (err, foundWorkers)=>{
        res.json(foundWorkers)
    })
})

module.exports = router