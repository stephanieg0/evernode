'use strict';

//require the schema in the models dir
const Note = require('../models/note');

module.exports.newNote = (req, res) => {
 res.render('new-note');
};

module.exports.show = (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {note: note});
  });
};

module.exports.create = (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;

    res.redirect(`/notes/${note._id}`);
  });
};

module.exports.destroy = (req, res) => {
  res.send('destroy');
};


