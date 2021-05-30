const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://wfh2d88:Iaabmc88@cluster0.q5idz.mongodb.net/haul-that-copy?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;