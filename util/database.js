const mongoose = require('mongoose');

const connectToDatabase = () => {
  return mongoose
    .connect(
      'uri'
    )
    .then(() => {
      console.log('Connected to MongoDB with Mongoose!');
    })
    .catch((err) => {
      console.log('Connection failed!', err);
      throw err;
    });
};

module.exports = connectToDatabase;
