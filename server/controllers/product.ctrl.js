const Product = require('./../models/Product');
const cloudinary = require('cloudinary');

module.exports = {
  getProducts: (req, res, next) => {
    Product.find({})
      .then(products => res.json(products))
      .catch(next);
  },
  getProduct: (req, res, next) => {
    Product.find({ _id: req.params.id })
      .then(product => res.json(product))
      .catch(next);
  },
};
