const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;

const connection = mongoose.connect(uri, {
  autoIndex: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectInterval: 500,
  // poolSize: 50,
  // bufferMaxEntrie: 0,
  keepAlive: true,
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// mongoose.set("useCreateIndex", true);

connection
  .then((db) => {
    db
    console.log('Successfully connected!!!🚀✋')
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
