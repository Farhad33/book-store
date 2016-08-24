'use strict';

const databaseName = process.env.NODE_ENV ? 'book-store-test' : 'book-store'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/book-store`
const db = pgp(connectionString);

const getAllBooks = function(id){
  return db.any("select * from books");
}

module.exports = {
  pgp: pgp,
  db: db,
  getAllBooks: getAllBooks,
};
