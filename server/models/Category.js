const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  meta_title: String,
  slug: String,
});

module.exports = mongoose.model('Category', CategorySchema);
