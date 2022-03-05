// const db = require("../models/index");

const resolvers = {
  Query: {
    async getLink() {
      console.log("GET LINK");
      return { url: "TESTURL", slug: "ABCD", id: 10 };
    }
  },

  Mutation: {
    async insertLink(parent, args) {
      // const createdLink = await db.Links.create(args);
      // return createdLink;
      return;
    }
  }
};

module.exports = { resolvers };
