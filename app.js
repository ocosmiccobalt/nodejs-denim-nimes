import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';

import { default as productsRoutes } from './routes/products.routes.js';
import { default as ordersRoutes } from './routes/orders.routes.js';
import enableCors from './middlewares/cors.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(bodyParser.json());

app.use(enableCors);

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(port);
