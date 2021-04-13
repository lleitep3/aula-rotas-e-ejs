var express = require('express');
var router = express.Router();

const controller = require('../controllers/users')

/* GET users listing. */
router.get('/', controller.list);

/* GET users listing. */
router.get('/:id', controller.details);

module.exports = router;
