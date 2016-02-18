'use strict';

const express = require('express');
const router = express.Router();

const Note = require('../models/note');

//route to serve up the form
router.get('/notes/new', (req, res) => {
  res.render('new-note');
});
//route to see individual note with a route parameter
router.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;
    res.render('show-note', {note: note});
  });
});

router.post('/notes', (req, res) => {
  console.log(req.body);
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log(note);
    res.redirect(`/notes/${note._id}`);
  });
});

module.exports = router;
