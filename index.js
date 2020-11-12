'use strict';

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

const VideoType = new GraphQLObjectType({
  name: 'Video',
  description: 'some description',
  fields: {
    id: {
      type: GraphQLID,
      description: 'id of the video'
    },
    title: {
      type: GraphQLString,
      description: 'Title of the video'
    },
    duration: {
      type: GraphQLInt,
      description: 'The duration of the video (in seconds).',
    },
    watched: {
      type: GraphQLBoolean,
      description: 'Whether or not the viewer has watched the video.',
    },
  }
});

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'rooooooot',
  fields: {
    video: {
      type: VideoType,
      resolve: () => new Promise((resolve) => {
        resolve({
          id: 'a',
          title: 'GraphQL',
          duration: 180,
          watched: false,
        });
      })
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
})

const resolvers = {
  video: () => ({
    id: '1aec',
    title: 'bar',
    duration: 180,
    watched: true,
  }),
  videos: () => [{
    id: '1aec',
    title: 'bar',
    duration: 180,
    watched: true,
  }, {
    id: '2aec',
    title: 'b2ar',
    duration: 280,
    watched: true,
  }]
};

const server = express();
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers,
}));

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}/`));
