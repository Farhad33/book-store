'use strict';

const databaseName = 'book-store'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const db = pgp(connectionString);


var SelectQuery = require('./models/selectQuery');


// const getAllBooks = function() {
//   return database.any( selectBooks.toString() )
// }

const Book = {
  all: () => db.any( (new SelectQuery( 'book' )).toString() )
}

module.exports = {
  pgp: pgp,
  db: db,
  Book: Book
};

// export { Book }
