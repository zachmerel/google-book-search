import axios from "axios";

export default {
  // Gets books from the Google API
  callgoogle: function(q) {
    // return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: q } });
    return axios.get("/api/google", { params: { q: q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};