const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require('./config');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (err) {
    console.log('Error connecting to database:', err);
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
