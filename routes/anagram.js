var express = require('express');
var router = express.Router();

const { processInput } = require('../controllers/anagram')

/* GET users listing. */
router
  .route('/')
  .get(function (req, res, next) {
    return res.render('anagram');
  });

router
  .route('/test')
  .post(function (req, res) {
    return res.json({ data: processInput(req.body.text) });
  });

module.exports = router;
