const mongoose = require('mongoose');

const connectToDatabase = () => {
  return mongoose
    .connect(
      'mongodb+srv://pratikumar56:admin@cluster0.vh4bccl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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
