var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// - criar o projeto com o express generator: express user generator -ejs
// - criar a pasta controller
// - criar ./controller/users.js
// - criar os arquivos na pasta views
