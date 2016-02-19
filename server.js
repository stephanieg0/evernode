'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const note = require('./routes/note');
const category = require('./routes/category');

const app = express();
const port = process.env.PORT || 3000;
//making jade accesible
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: false
}));

//look for a query parameter in post
app.use(methodOverride('_method'));

//Root Route
app.get('/', (req, res) => {
  res.send('Server Running');
});
//Routes
app.use(note);
app.use(category);

//connecting to mongoose. It has to wrap the port listen function.
mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  //listen on a port
  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});

