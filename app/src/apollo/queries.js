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
