const express = require('express');
const app = express();

const { PORT } = require('./util/config');
const { connectToDatabase } = require('./util/db');

const { productsRouter, categoryRouter } = require('./controllers');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/category', categoryRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
