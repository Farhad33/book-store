DROP TABLE IF EXISTS book;

CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL,
);

DROP TABLE IF EXISTS genres;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL
);

DROP TABLE IF EXISTS book_genres;

CREATE TABLE book_genres (
  book_id INTEGER NOT NULL,
  genre_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL
);

DROP TABLE IF EXISTS author_book;

CREATE TABLE author_book(
  author_id INTEGER NOT NULL,
  book_id INTEGER NOT NULL
);


SELECT now();

-- fixture data
INSERT INTO
  book (title)
VALUES
  ('Trekonomics'),
  ('White Fang'),
  ('Lord of the Rings I'),
  ('Lord of the Rings II'),
  ('Lord of the Rings III'),
  ('Clueless');

INSERT INTO
  genres (title)
VALUES
  ('Fantasy'),
  ('Horror'),
  ('SciFi'),
  ('Adult'),
  ('Children'),
  ('Teen');

INSERT INTO
  authors (name)
VALUES
  ('Manu Saadia'),
  ('Jack London'),
  ('J.R.R. Tolkien'),
  ('Alicia Silverstone');

-- INSERT INTO
--   author_book
-- SELECT
--   authors.id, book.id
-- FROM
--   book
-- CROSS JOIN
--   authors
-- WHERE
--   book.title = 'White Fang'
-- AND
--   authors.name = 'Jack London';
--
--
-- INSERT INTO
--   author_book
-- SELECT
--   authors.id, book.id
-- FROM
--   book
-- CROSS JOIN
--   authors
-- WHERE
--   book.title = 'Trekonomics'
-- AND
--   authors.name = 'Manu Saadia';
--
-- INSERT INTO
--   author_book
-- SELECT
--   authors.id, book.id
-- FROM
--   book
-- CROSS JOIN
--   authors
-- WHERE
--   book.title LIKE 'Lord of the Rings%'
-- AND
--   authors.name = 'J.R.R. Tolkien';
--
-- INSERT INTO
--   book_genres
-- SELECT
--   book.id, genres.id
-- FROM
--   book
-- CROSS JOIN
--   genres
-- WHERE
--   book.title = 'White Fang'
-- AND
--   genres.title = 'Fantasy';
--
--
-- INSERT INTO
--   book_genres
-- SELECT
--   book.id, genres.id
-- FROM
--   book
-- CROSS JOIN
--   genres
-- WHERE
--   book.title = 'White Fang'
-- AND
--   genres.title = 'Teen';
--
--
-- INSERT INTO
--   book_genres
-- SELECT
--   book.id, genres.id
-- FROM
--   book
-- CROSS JOIN
--   genres
-- WHERE
--   book.title = 'Lord of the Rings I'
-- AND
--   genres.title = 'Fantasy';
--
-- INSERT INTO
--   book_genres
-- SELECT
--   book.id, genres.id
-- FROM
--   book
-- CROSS JOIN
--   genres
-- WHERE
--   book.title = 'Lord of the Rings II'
-- AND
--   genres.title = 'Fantasy';
--
--
-- INSERT INTO
--   book_genres
-- SELECT
--   book.id, genres.id
-- FROM
--   book
-- CROSS JOIN
--   genres
-- WHERE
--   book.title = 'Clueless'
-- AND
--   genres.title = 'Teen';
--
-- SELECT now();
--
-- SELECT * FROM author_book;
--
--
--
-- -- Users can search for bookby title OR by author OR by genre, and search results will be presented in a new page
--
-- -- give me all the bookwhere the title is LIKE x
-- -- SELECT * FROM bookWHERE title LIKE '%something%';
--
-- -- give me all the bookin the genre X
-- SELECT
--   book.*
-- FROM
--   book
-- LEFT JOIN
--   book_genres
-- ON
--   book.id = book_genres.book_id
-- LEFT JOIN
--   genres
-- ON
--   genres.id = book_genres.genre_id
-- WHERE
--   genres.title = 'Fantasy';
--
-- -- give me all the bookauthored by X
--
--
-- SELECT
--   book.*
-- FROM
--   book
-- JOIN
--   author_book
-- ON
--   book.id = author_book.book_id
-- JOIN
--   authors
-- ON
--   authors.id = author_book.author_id
-- WHERE
--   authors.name = 'J.R.R. Tolkien';
