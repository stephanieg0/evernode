'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
//route to serve up the form
app.get('/notes/new', (req, res) => {
  res.render('new-note');
});
app.post('/notes', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});
//listen on a port
app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
})
