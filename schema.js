const { gql } = require("apollo-server");

const typeDefs = gql`
  enum Categories {
    REACTJS
    NODEJS
    TYPESCIRPT
    JAVASCRIPT
    EXPRESS
    BACKEND
    FRONTEND
  }

  type User {
    id: ID
    name: String!
    username: String!
    isAuthor: Boolean!
    joinedOn: String!
    img: String
    likes: [Blog]!
  }

  type Blog {
    id: ID
    writtenOn: String!
    heading: String!
    content: String!
    category: Categories!
    author: User!
    total_likes: int!
    total_unlikes: int!
    comments: [Comment]!
  }

  type Comment {
    id: ID
    from: User!
    toBlog: Blog!
  }

  input BlogInput {
    id: ID
    author: User
    heading: String
    category: String
  }

  type Query {
    user: User!
  }
`;

module.exports = typeDefs;
