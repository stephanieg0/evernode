'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const Note = mongoose.model('Notes', mongoose.Schema({
  title: String,
  text: String
}));
//making jade accesible
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}))
//Root Route
app.get('/', (req, res) => {
  res.send('Server Running');
});
//route to serve up the form
app.get('/notes/new', (req, res) => {
  res.render('new-note');
});
app.post('/notes', (req, res) => {
  console.log(req.body);
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log(note);
    res.redirect('/');
  });
});

//connecting to mongoose. It has to wrap the port listen function.
mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  //listen on a port
  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});

