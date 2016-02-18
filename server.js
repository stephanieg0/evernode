'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const note = require('./routes/note');

const app = express();
const port = process.env.PORT || 3000;
//making jade accesible
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}))

//Root Route
app.get('/', (req, res) => {
  res.send('Server Running');
});
//Routes
app.use(note);

//connecting to mongoose. It has to wrap the port listen function.
mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  //listen on a port
  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});

