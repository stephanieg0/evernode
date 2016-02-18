'use strict';

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Root Route
app.get('/', (req, res) => {
  res.send('Server Running');
});
//listen on a port
app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
})
