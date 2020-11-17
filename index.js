'use strict';

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const { queryType } = require('./src/types/queryType');
const { resolvers } = require('./src/resolvers');

const PORT = process.env.PORT || 9000;

const server = express();
server.use('/graphql', graphqlHTTP({
  schema: new GraphQLSchema({
    query: queryType
  }),
  graphiql: true,
  rootValue: resolvers,
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/graphql`);
});
