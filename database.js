'use strict';

const databaseName = 'book-store'
const pgp = require('pg-promise')();
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const db = pgp(connectionString);

var SelectQuery = require('./models/selectQuery');

const Book = {
  all: () => db.any( (new SelectQuery( 'book' )).toString() )
}

const paging = (options) => {
  if (options.page) {
    let PAGE_SIZE = 10
    let offset = (options.page - 1) * PAGE_SIZE
    variables.push(offset)
    sql += `
    LIMIT ${PAGE_SIZE}
    OFFSET $${variables.length}
    `
  }
}
module.exports = {
  pgp: pgp,
  db: db,
  Book: Book,
  paging: paging
};

// export { Book }
