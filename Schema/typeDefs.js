const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  # Queries
  type Query {
    getLink: Link!
  }

  type Mutation {
    insertLink(url: String!, slug: String!): Link!
  }
`;

module.exports = { typeDefs };
