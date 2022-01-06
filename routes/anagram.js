var express = require('express');
var router = express.Router();

const { processInput } = require('../controllers/anagram')

/* GET users listing. */
router
  .route('/')
  .get(function(req, res, next) {
    return res.render('anagramInput');
  })
  .post(function (req, res) {
    return res.render('anagramOutput', {
      data: processInput(req.body.userInput)
    })
  });

module.exports = router;
