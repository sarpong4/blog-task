const { SchemaComposer } = require("graphql-compose");

const db = require("../db");

const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation } = require("./user");
const { BlogQuery, BlogMutation } = require("./blog");
const { CommentQuery, CommentMutation } = require("./comment");

schemaComposer.Query.addFields({
  ...UserQuery,
  ...BlogQuery,
  ...CommentQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...BlogMutation,
  ...CommentMutation,
});

module.exports = schemaComposer.buildSchema();