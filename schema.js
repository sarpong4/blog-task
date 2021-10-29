const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID,
        name: String!
        username: String!
        isAuthor: Boolean!
    }

    type Query{
        user: User!
    }
`;

module.exports = typeDefs;
