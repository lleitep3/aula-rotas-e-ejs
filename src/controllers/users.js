const model = require('../models/users')

const list = (req, res) => {
  res.render("userList", {
    title: "Lista de usuários",
    users: model.getAll()
  });
};

const details = (req, res) => {
  const { id } = req.params
  const user = model.getById(id)

  res.render("userDetail", {
    title: `Dados de ${user.name}`,
    user
  });
};

module.exports = {
  list,
  details
}