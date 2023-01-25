import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login(
    $username: String! 
    $password: String!
    ) {
    login(
        username: $username
        password: $password){
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String! 
    $email: String! 
    $password: String!
    ) {
    addUser(
        username: $username,
        email: $email,
        password: $password
        ){
        token
        user {
            _id
            username
            email
            favorited
            favorites {
                    favoritesId
                    favoritesBody
                    favorited
                    groups {
                        groupId
                        name
                        totalMessages
                        lastModified
                    }
                }
            }
        }
    }
`;

export const POST_GROUP = gql`
mutation postGroup($groupId: ID! 
            $name: String! 
            $totalMessages: Int!
            $lastModified: String) 
            {
            postGroup(
            groupId: $groupId
            name: $name
            totalMessages: $totalMessages
            lastModified: $lastModified)
            groups {
            groupId
            name
            totalMessages
            lastModified
        }

}`;

export const ADD_FAVORITES = gql`
mutation addFavorites($groupId: ID!)
    {
    addFavorites(groupId: $groupId)
    favorites {
        favoritesId
        favoritesBody
        favorited
        groups {
            groupId
            name
            totalMessages
            lastModified
        }
    }
}`

export const DELETE_GROUP = gql`
mutation deleteGroup($groupId: ID!)
    {
    deleteGroup(groupId: $groupId)
        groups {
            groupId
            name
            totalMessages
            lastModified
        }
}`
;