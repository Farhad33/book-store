var express = require('express');
var router = express.Router();
var database = require('../database');


router.post('/', (req, res) => {
  const { title } = req.body.title
  database.addBook(title)
    .then(function(books) {
      res.render('/books/details', {
        books: books
      })
    })
    .catch(function(error) {
       throw error
    })
});




module.exports = router;
