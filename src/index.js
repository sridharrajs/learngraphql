const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const query = require('./query');
const mutation = require('./mutations');

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: new GraphQLSchema({ query, mutation }),
  graphiql: true
}));

module.exports = { app };
