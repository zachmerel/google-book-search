const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true},
  title: { type: String, required: true },
  subtitle: String,
  link: String,
  authors: { type: String, required: true },
  description: String,
  image: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
