const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Status {
    status: String!
  }

  # Queries
  type Query {
    getLink: Link!
  }
`;

module.exports = { typeDefs };
