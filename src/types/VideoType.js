const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

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

module.exports = { VideoType };
