const express = require('express');
const ideasRouter = express.Router();
const db = require('./db')
const checkMillionDollarIdea = require('./checkMillionDollarIdea')



ideasRouter.get('/', (req, res)=>{
    const ideasAll = db.getAllFromDatabase('ideas')
    if(ideasAll){
        res.send(ideasAll)
    } else {
        res.status(404).send('not found')
    }
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res)=> {
    let newElement = db.addToDatabase('ideas', req.body)
    res.status(201).send(newElement)
})

ideasRouter.get('/:ideaId', (req, res)=>{
    const ideaId = req.params.ideaId
    const ideaElement = db.getFromDatabaseById('ideas', ideaId)
    if(ideaElement){
        res.send(ideaElement)
    } else{
        res.status(404).send('not found')
    }
})


ideasRouter.put('/:ideaId', (req, res)=>{
    const ideaId = req.params.ideaId
    db.updateInstanceInDatabase('ideas', req.body)
    const ideaElement = db.getFromDatabaseById('ideas', ideaId)
    if (ideaElement){
        res.send(ideaElement)
    } else{
        res.send(404).send('not found')
    }
})

ideasRouter.delete('/:ideaId', (req, res)=>{
    const ideaId = req.params.ideaId
    const deleted = db.deleteFromDatabasebyId('ideas', ideaId)
    if(deleted){  
        res.status(204).send(deleted)
    } else{
        res.status(404).send(deleted)
    }
})




// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.

module.exports = ideasRouter;