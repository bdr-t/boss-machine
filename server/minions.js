const express = require('express');
const minionsRouter = express.Router();
const db = require('./db')



minionsRouter.get('/', (req, res)=>{
    const minionsAll = db.getAllFromDatabase('minions')
    if(minionsAll){
        res.send(minionsAll)
    } else {
        res.status(404).send('not found')
    }
})

minionsRouter.post('/', (req, res)=> {
    let newElement = db.addToDatabase('minions', req.body)
    res.status(201).send(newElement)
})



minionsRouter.get('/:minionId', (req, res)=>{
    const minionId = req.params.minionId
    const minionElement = db.getFromDatabaseById('minions', minionId)
    if(minionElement){
        res.send(minionElement)
    } else{
        res.status(404).send('not found')
    }
})


minionsRouter.put('/:minionId', (req, res)=>{
    const minionId = req.params.minionId
    db.updateInstanceInDatabase('minions', req.body)
    const minionElement = db.getFromDatabaseById('minions', minionId)
    if (minionElement){
        res.send(minionElement)
    } else{
        res.send(404).send('not found')
    }
})

minionsRouter.delete('/:minionId', (req, res)=>{
    const minionId = req.params.minionId
    const deleted = db.deleteFromDatabasebyId('minions', minionId)
    if(deleted){  
        res.status(204).send(deleted)
    } else{
        res.status(404).send(deleted)
    }
})




// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.

module.exports = minionsRouter;