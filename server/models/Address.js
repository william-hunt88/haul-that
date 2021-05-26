const { Schema } = require("mongoose");

const addressSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    address2: {
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
