const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    category: {
      type: Array
    },
    type: {
      type: Array
    },
    options: {
      type: Array
    },
    amount: {
      type: Number
    },
    price: {
      type: Number,
      required: true
    },
    inStock: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Products', ProductsSchema);
