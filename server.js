require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

require("./utils/db");
const schema = require("./schema");

const app = express();

const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === "development" ? true : false,
  introspection: true,
  tracing: true,
  path: "/",
});

server.applyMiddleware({
  app,
  path: "/",
  cors: true,
  onHealthCheck: () => {
    // eslint-disable-next-line no-undef
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      }
      reject();
    });
  },
});

app.listen({ port: process.env.PORT  || 4000}, () => {
  console.log(`🚀 Server on port ${port}`)
});
