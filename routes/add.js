var express = require('express');
var router = express.Router();
var database = require('../database');

/* GET home page. */
// router.post('/', (req, res) => {
//   const { title } = req.body
//   database.addBook(title)
//     .then(function(books) {
//       res.render('add', {
//         books: books
//       })
//     })
//     .catch(function(error) {
//        throw error
//     })
// });

router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express' });
});


module.exports = router;
