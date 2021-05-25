const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type Query {
    helloWorld: String
    jobs: [Job]
    users: [User]
    time: DateTime
    me: User
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    jobs: [Job]
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
    latitude: String
    longitude: String
  }

  input addressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
    latitude: String
    longitude: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
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
    pickupJob(jobId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;

// scalar Date

// type MyType {
//   created: Date
// }


// input jobInput {
//   quantity: String!
//   category: String!
//   date: String!
//   description: String!
//   pickup: Address!
//   dropoff: Address!
// }