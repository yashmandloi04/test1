const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  image: String,
  // category_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Category"
  // },
  price: Number
})

module.exports = mongoose.model('product', ProductSchema);