const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI; // URI to connect to atlas.

const connectDB = () => {
  return mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
      console.log("Successfully connected!!!🚀✋");
    })
    .catch((error) => console.error(error));
};

module.exports = connectDB
