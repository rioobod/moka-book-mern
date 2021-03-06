const { gql } = require("apollo-server-express");
const typeDefs = gql`

type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(input: saveBookInput): User
  }
  input saveBookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
