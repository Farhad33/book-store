var express = require('express');
var router = express.Router();
var database = require('../database');
//
// import express from 'express'
// import database, { Book } from '../database'
// const router = express.Router()


/* GET home page. */
router.get('/', (req, res, next) => {
  database.Book.all().then( books => res.render('books', {books} )).catch(err => res.json(err))

});


module.exports = router;
