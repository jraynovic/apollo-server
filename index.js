const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./Schema/typeDefs.js");
const { resolvers } = require("./Schema/resolver.js");
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
