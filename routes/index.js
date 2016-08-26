const express = require('express')
const router = express.Router()
const database = require('../database')


/* GET home page. */
router.get('/', function(req, res, next) {

  const page = query.page || 1
  const size = query.size || 10

  database.Book.all()
  .then( books =>
    res.render('books', {books}
  ))
  .catch(err => res.json(err))
  

  if( query.search_query === undefined ) {
    database.Book.all( page, size )
      .then( books => response.render( 'index', { books, page, size } ))
      .catch( error => response.send({ error, message: error.message }))
  } else {
    database.Search.forBooks({ page, size, search_query: query.search_query })
      .then( books => response.render( 'index', { books, page, size } ))
      .catch( error => response.send({ error, message: error.message }))
  }
})

module.exports = router
