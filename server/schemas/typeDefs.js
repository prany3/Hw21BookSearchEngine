const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    type: String
  }
      
  type Book {
    authors: [Author]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    books: [Book]
    book(_id: ID): Book
  }
  
type Mutation {
  addBooks(authors: String, description: String, bookId: String, image: String, link: String, title: String): Book
  deleteBooks(bookId: String): Boolean
}
`;



module.exports = typeDefs;
