const mongoose = require("mongoose");
require('dotenv').config();


const uri = process.env.MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("DB initiated");
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectDB;
