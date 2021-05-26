import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $driver: String, $customer: String) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, driver: $driver, customer: $customer) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($quantity: String!, $category: String!, $date: DateTime!, $description: String!, $distance: String!, $pickup: addressInput!, $dropoff: addressInput!, $distance: Int ) {
    addJob(quantity: $quantity, category: $category, date: $date, description: $description, distance: $distance, pickup: $pickup, dropoff: $dropoff, distance: $distance) {
      job {
        _id
        quantity
        category
        date
        description
        distance
        pickup
        dropoff
      }
    }
  }
`;

export const PICKUP_JOB = gql`
  mutation pickupJob($jobId: ID!) {
    pickupJob(jobId: $jobId) {
      user{
        _id: ID
      }
    }
  }
`;