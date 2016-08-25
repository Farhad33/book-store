'use strict';

const databaseName = 'book-store'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const db = pgp(connectionString);

var SelectQuery = require('./models/selectQuery');

const Book = {
  all: (page, size) => db.any( (new SelectQuery( 'books', { page, size } )).toString() )
}

const Search = {
  forBooks: options => {
    const variables = []
    let sql = `SELECT DISTINCT(books.*) FROM books`

    if (options.search_query){
      let search_query = options.search_query
        .toLowerCase()
        .replace(/^ */, '%')
        .replace(/ *$/, '%')
        .replace(/ +/g, '%')

      variables.push(search_query)
      sql += `
      LEFT JOIN author_books ON books.id=author_books.book_id
      LEFT JOIN authors ON authors.id=author_books.author_id
      LEFT JOIN book_genres ON books.id=book_genres.book_id
      LEFT JOIN genres ON genres.id=book_genres.genre_id
      WHERE LOWER(books.title)  LIKE $${variables.length}
      OR LOWER(authors.name) LIKE $${variables.length}
      OR LOWER(genres.title) LIKE $${variables.length}
      ORDER BY books.id ASC
      `
    }

    if (options.page){
      let PAGE_SIZE = parseInt( options.size || 10 )
      let offset = (parseInt(options.page) - 1) * PAGE_SIZE
      variables.push(offset)
      sql += `
      LIMIT ${PAGE_SIZE}
      OFFSET $${variables.length}
      `
    }

    return db.any(sql, variables)
  }
}

module.exports = { pgp, db, Book, Search }

// export { Book }
