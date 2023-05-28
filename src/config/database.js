const dbConnectionString = process.env.DB;
const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error('Error connecting to MongoDB');
  }
};

module.exports = connect;
