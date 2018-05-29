const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  meta_description: String,
  meta_title: String,
  tags: [String],
  attributes: [],
  enabled: Boolean,
  slug: String,
  code: String,
  price: Number,
  images: [String],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Product', ProductSchema);
