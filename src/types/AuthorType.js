const { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql');

const { Book } = require('../models');
// const BookType = require('./BookType');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    // books: {
    //   type: new GraphQLList(BookType),
    //   resolve(parent, args) {
    //     return Book.find({
    //       authorId: parent.id
    //     });
    //   }
    // }
  })
});

module.exports = AuthorType;
