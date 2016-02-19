'use strict';

const express = require('express');
const router = express.Router();

const Category = require('../models/category');
const Note = require('../models/note');

const categoryCtrl = require('../controllers/category');

router.param('id', (req, res, next, id) => {
  //finding the category id to pass on
  Category.findById(id, (err, category) => {
    if (err) throw err;
    //assigning the category to request to be available
    req.category = category;

    //finding the note that has an equivalent id as the category
    Note.find({category: id}, (err, notes) => {
      if (err) throw err;
      req.category.notes = notes;
      next();
    });
  });
});


router.get('/category', categoryCtrl.index);
router.get('/category/new', categoryCtrl.new);
router.post('/category', categoryCtrl.create);
router.get('/category/:id', categoryCtrl.show);

module.exports = router;
