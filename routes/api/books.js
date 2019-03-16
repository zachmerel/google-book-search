const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  //finds all the books in mongodb
  .get(booksController.findAll)
  //post books to mongodb
  .post(booksController.create);

// Matches with "/api/books/saved"
router
  .route("/:id")
  //gets book by id
  .get(booksController.findById)
  //updates book by id
  .put(booksController.update)
  //deletes book from mongodb
  .delete(booksController.remove);

module.exports = router;
