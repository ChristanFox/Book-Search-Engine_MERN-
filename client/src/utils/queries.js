import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        id
        username
        email
        SavedBooks {
            bookId
            authors
            image
            title
            description
            link
        }
    }
}`