const { ApolloServer } = require("apollo-server");
const connectDB = require("./src/db");
const { merge } = require("lodash");
const { authenticate } = require("./src/utils/auth");
const user = require("./src/types/user/user.resolvers");
const loadTypeSchema = require("./src/utils/schema");
const blog = require("./src/types/blog/blog.resolvers");

const port = process.env.PORT || 8000;

const types = ["blog", "user"]; //, "comment", "likes", "bookmarks"

const start = async () => {
  const rootSchema = ``;
  const Schemas = await Promise.all(types.map(loadTypeSchema));

  const server = new ApolloServer({
    typeDefs: [rootSchema, ...Schemas],
    resolvers: merge({}, blog, user),
    async context({ req }) {
      // use the authenticate function from utils to auth req,
      const user = await authenticate(req);
      return { user };
    },
  });

  await connectDB().then(() => {
    console.log("Database connected!!!🚀✋");
  });
  const { url } = await server.listen({ port: port });

  console.log(`GQL server ready at ${url}`);
};

start();
