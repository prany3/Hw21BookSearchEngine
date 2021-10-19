import { gql } from '@apollo/client';

export const ADD_BOOKS = gql`
  mutation addBooks( $authors: String!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
    addBooks(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      authors {
        type
      }
      description
      bookId
      image
      link
      title
    }
 } 
`;

export const DELETE_BOOKS = gql`
  mutation deleteBooks( $bookId: String!) {
    deleteBooks(bookId: $bookId) 
 } 
`;
