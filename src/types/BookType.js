const { GraphQLID, GraphQLObjectType, GraphQLString } = require('graphql');

const { Author } = require('../models');
const AuthorType = require('./AuthorType');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      }
    }
  })
});

module.exports = BookType;
