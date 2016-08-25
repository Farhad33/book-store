var express = require('express');
var router = express.Router();
var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {

  let page = parseInt(req.query.page, 10)
  if (isNaN(page) || page < 1) page = 1
  
  database.Book.all()
  .then( books =>
    res.render('books', {books}
  ))
  .catch(err => res.json(err))
});



module.exports = router;
