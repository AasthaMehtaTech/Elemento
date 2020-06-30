const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  code: String,
  screenshot: {
    type: Buffer,
  },
});

module.exports = mongoose.model("Element", elementSchema);
