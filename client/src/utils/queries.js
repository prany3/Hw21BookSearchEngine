import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getBooks {
    books {
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
