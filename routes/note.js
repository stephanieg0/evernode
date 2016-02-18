'use strict';

const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

//route to serve up the form
router.get('/notes/new', note.newNote);
//route to see individual note with a route parameter
router.get('/notes/:id', note.show);
//deleting individual note
router.delete('/notes/:id', note.destroy);
router.post('/notes', note.create);

module.exports = router;

