const express = require('express');
const cors = require('cors');
const app = express();

const { PORT } = require('./util/config');
const { connectToDatabase } = require('./util/db');

const { ProductsRoute } = require('./Product');
const { CategoryRoute } = require('./Category');

app.use(cors());

app.use('/api/products', ProductsRoute);
app.use('/api/categories', CategoryRoute);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
