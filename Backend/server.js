import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/Db.js';
import { notFound, errorHandler } from './Middleware/errorMiddleware.js';
import colors from 'colors';
import productRoutes from './Routes/productRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import orderRoutes from './Routes/orderRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${4000}`.yellow.bold
  )
);
