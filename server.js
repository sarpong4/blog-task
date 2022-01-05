require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

require("./db");
const schema = require("./schema");

const app = express();

const server = new ApolloServer({
  schema,
  cors: true,
});

// app.use('/', server.start())

// async () => {
//   await server.start();
//   server.applyMiddleware({
//     app,
//     path: "/",
//     cors: true,
//     onHealthCheck: () => {
//       // eslint-disable-next-line no-undef
//       new Promise((resolve, reject) => {
//         if (mongoose.connection.readyState > 0) {
//           resolve();
//         }
//         reject();
//       });
//     },
//   });
// };

const port = process.env.PORT || 4000;
server.listen()

// app.listen({ port: process.env.PORT || 4000 }, () => {
//   console.log(`🚀 Server on port ${process.env.PORT || 4000}`);
// });
