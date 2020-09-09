import { gql } from 'apollo-boost';

const addUser = gql`
    mutation ($name: String!, $surname: String!, $login: String!, $age: Int!, $phone: String!, $endDate: String!) {
        addUser(name: $name, surname: $surname, login: $login, age: $age, phone: $phone, endDate: $endDate) {
            name
            surname
            login
            age
            phone
            endDate
        }
    }
`;

const deleteUser = gql`
    mutation ($id: ID) {
        deleteUser(id: $id) {
        }
    }
`;

export default {
    addUser,
    deleteUser
}