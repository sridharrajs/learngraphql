const { GraphQLObjectType } = require('graphql');

const { VideoType } = require('./VideoType');

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

module.exports = { queryType };
