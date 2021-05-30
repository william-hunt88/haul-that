const mongoose = require("mongoose");

mongoose.connect(
  "https://salty-brook-01352.herokuapp.com/graphql",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;