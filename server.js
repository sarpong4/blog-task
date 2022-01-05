const { ApolloServer } = require("apollo-server");
const connectDB = require("./src/db");
const { merge } = require("lodash");
const { authenticate } = require("./src/utis/auth");
const user = require("./src/types/user/user.resolvers");
const loadTypeSchema = require("./src/utils/schema");

const port = process.env.PORT || 8000;

const types = ["user", "blog", "comment", "likes", "bookmarks"];

const start = async () => {
  const Schemas = await Promise.all(types.map(loadTypeSchema));

  const server = new ApolloServer({
    typeDefs: [Schemas],
    resolvers: merge(user),
    async context({ req }) {
      const user = await authenticate(req);
      return { user };
    },
  });

  await connectDB();
  const { url } = await server.listen({ port: port });

  console.log(`GQL server ready at ${url}`);
};

start();
