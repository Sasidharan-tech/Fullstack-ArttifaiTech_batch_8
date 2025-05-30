const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
});

module.exports = mongoose.model("Todo", todoSchema);