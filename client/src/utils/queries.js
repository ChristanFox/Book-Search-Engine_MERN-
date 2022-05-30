import gql from 'graphql-tag';

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