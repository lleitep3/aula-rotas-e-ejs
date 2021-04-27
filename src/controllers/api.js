const model = require('../models/users')

const findAll = (req, res) => {

  const { name } = req.filters
  let users = model.getAll()

  if (name) {
    const filterByName = (user) =>
      user.name
        .toLowerCase()
        .includes(name.toLowerCase())

      users = users.filter(filterByName)
  }

  res.json(users)
}


module.exports = {
  findAll
}