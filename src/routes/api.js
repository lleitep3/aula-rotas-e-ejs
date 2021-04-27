const express = require('express')
const router = express.Router()

const api = require('../controllers/api')

const middleware = require('../middlewares/validations')

router.get('/users',
  middleware.validateFilters(['name', 'email']),
  api.findAll)


router.get('/produtos',
  middleware.validateFilters(['name', 'price', 'category']),
  api.findAll)


module.exports = router