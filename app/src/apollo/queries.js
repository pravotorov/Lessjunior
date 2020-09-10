import { gql } from 'apollo-boost';

export const usersQuery = gql`
    query {
        users{
            id
            name
            surname
            login
            age
            phone
            endDate            
        }
    }
`;

export const usersQueryId = gql`
    query ($id: ID) {
        users(id: $id){
            id
            name
            surname
            login
            age
            phone
            endDate
        }
    }
`;

export const taskQuery = gql`
    query {
        tasks{
            id
            title
            text
            photo
            date
        }
    }
`;