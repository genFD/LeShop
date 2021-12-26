import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../Models/productModel.js';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../Controllers/userController.js';
import { protect } from '../Middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
