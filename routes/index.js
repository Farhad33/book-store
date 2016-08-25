const express = require('express')
const router = express.Router()
const database = require('../database')

router.get( '/', function( request, response) {
  const { query } = request

  const page = query.page || 1
  const size = query.size || 10

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
