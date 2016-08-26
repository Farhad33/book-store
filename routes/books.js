var express = require('express');
var router = express.Router();
var database = require('../database');


/* GET home page. */
router.get('/', (req, res, next) => {


  let page = parseInt(req.query.page, 10)
  if (isNaN(page) || page < 1) page = 1


  database.Book.all()
  .then( books => res.render('books', { books } )).catch(err => res.json(err))
});


router.get('/:Id/', function(req, res) {
  database.Book.one(req.params.Book.id)
    .then( book => res.render( 'books/details' , { book: books } ))
    .catch( function( error ) { res.status( 500 ).send( error ) })
});


module.exports = router;
