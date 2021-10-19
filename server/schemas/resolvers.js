const { Book, User } = require('../models');

const resolvers = {
    Query: {
    books: async () => {
        return await Book.find({});
    },
    book: async (parent, { _id }) => {
        return await Book.findById(_id);
    },
},

    Mutation: {
    addBooks: async (parent, { authors, description, bookId, image, link, title }) => {
      return await Book.create({ authors, description, bookId, image, link, title });
    },
    deleteBooks: async (parent, { bookId }) => {
      return await Book.remove({ bookId });
    },
  },
};

module.exports = resolvers;