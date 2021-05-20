const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type Query {
    helloWorld: String
    jobs: [Job]
    time: DateTime
  }

  type User {
    _id: ID
    username: String!
    email: String!
    driver: Boolean!
    customer: Boolean!
  }

  type Job {
    _id: ID
    quantity: String!
    category: String!
    date: DateTime!
    description: String!
    pickup: Address
    dropoff: Address
  }

  type Address {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input addressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input jobInput {
    quantity: String!
    category: String!
    date: String!
    description: String!
    pickup: String
    dropoff: String
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      driver: Boolean!
      customer: Boolean!
    ): Auth
    login(email: String!, password: String!): Auth
    addJob(
      quantity: String!
      category: String!
      date: DateTime!
      description: String!
      pickup: addressInput!
      dropoff: addressInput!
    ): Job
  }
`;

// export the typeDefs
module.exports = typeDefs;

// scalar Date

// type MyType {
//   created: Date
// }
