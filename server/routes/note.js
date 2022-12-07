const express = require('express');
const NoTe = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await NoTe.getAllNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/notes', async (req, res) => {
    try {
      let no_te = await NoTe.note(req.body);
      res.send({...no_te})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/insert', async (req, res) => {
    try {
      let note = await NoTe.insertNotes(req.body);
      res.send({...note, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports = router;
