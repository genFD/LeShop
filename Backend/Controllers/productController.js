import asyncHandler from 'express-async-handler';
import Product from '../Models/productModel.js';

// @desc : fetch all products
// @route : Get api/products
// @access : public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc : fetch single products
// @route : Get api/products
// @access : public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not Found');
  }
});

export { getProductById, getProducts };
