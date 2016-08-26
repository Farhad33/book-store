var express = require('express');
var router = express.Router();
var database = require('../database');

router.get('/', (req, res, next) => {
  database.Book.all()
  .then( books => res.render('books', { books } )).catch(err => res.json(err))
});

router.get('/:Id/', function(req, res) {
  database.Book.one(req.params.Id)
    .then( book => res.render( 'details' , { book } ))
    .catch( function( error ) { res.status( 500 ).send( error ) })
});


module.exports = router;
