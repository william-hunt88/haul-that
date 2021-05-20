const { Schema, model } = require("mongoose");
const addressSchema = require('./Address')
const bcrypt = require("bcrypt");
const { JsonWebTokenError } = require("jsonwebtoken");

const jobSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    pickup: addressSchema,

    dropoff: addressSchema
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Job = model('Job', jobSchema);

module.exports = Job;
