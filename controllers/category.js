'use strict';

const Category = require('../models/category');

module.exports.index = (req, res) => {
    res.render(`category-index`);
};

module.exports.create = (req, res) => {
  Category.create(req.body, (err) => {
    if (err) throw err;

    res.redirect(`/category`);
  });
};

module.exports.new = (req, res) => {
    res.render(`category-new`);
};

module.exports.show = (req, res) => {
    res.render(`category-show`, {
      category: req.category
    });
};

