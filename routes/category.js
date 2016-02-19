'use strict';

const express = require('express');
const router = express.Router();

const category = require('../controllers/category');

router.get('/category', category.index);
router.put('/category', category.create);
router.get('/category/new', category.new);

module.exports = router;
