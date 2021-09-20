const express = require('express');
const meetingsRouter = express.Router();
const db = require('./db')


meetingsRouter.get('/', (req, res)=>{
    const meetingsAll = db.getAllFromDatabase('meetings')
    if(meetingsAll){
        res.send(meetingsAll)
    } else {
        res.status(404).send('not found')
    }
})

meetingsRouter.post('/', (req, res, next) => {
    let newMeeting = db.addToDatabase('meetings', db.createMeeting());
    if(newMeeting){
        res.status(201).send(newMeeting);
    } else{
        res.status(404)
    }
});


meetingsRouter.delete('/', (req, res)=>{
    const deleted = db.deleteAllFromDatabase('meetings')
    if(deleted){  
        res.status(204).send(deleted)
    } else{
        res.status(404).send(deleted)
    }
})

module.exports = meetingsRouter