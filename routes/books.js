var express = require('express');
var router = express.Router();
var database = require('../database');

router.get('/', (req, res, next) => {
  const { query } = req

  const page = query.page || 1
  const size = query.size || 10

  database.Book.all( page, size )
    .then( books => res.render( 'books', { books, page, size } ))
    .catch( error => res.send({ error, message: error.message }))
})

router.get( '/add', (req, res) => {
  res.render( 'add' )
})

router.post( '/', (req, res) => {
  database.Book.insert( req.body )
  .then(id => res.send( '/' , {book: req.body }) )
  .catch( error => res.send({ error, message: error.message }))
})

router.get('/:Id/', (req, res) => {
  database.Book.one(req.params.Id)
    .then( book => res.render( 'details' , { book } ))
    .catch( error => res.send({ error, message: error.message }))
})


router.post('/delete/:id', (req, res, next) =>{
  const { id } = req.params.Id

  Book.delete( id )
    .catch( error => res.send({ error, message: error.message }))
    .then( book => res.render('index', {book} ))
  next()
})


module.exports = router;
