const { Schema } = require("mongoose");

const addressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    latitude: {
      type: String
    },
    longitude: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = addressSchema;
