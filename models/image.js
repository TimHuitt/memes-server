const mongoose = require("mongoose");
const Schema = mongoose.Schema

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  description: { type: String },
  alt: { type: String, default: "" },
  // user: { type: Schema.Types.ObjectId, ref: "User" },
},{timestamps: true});

module.exports = mongoose.model("Image", imageSchema);