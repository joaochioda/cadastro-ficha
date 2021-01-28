const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req,res) {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email:  {
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Rua Jasmim' } },
        { association: 'objetos',
        required: false,
        where: {
          name: {
            [Op.iLike]: 'Car%'
          }
        } },

      ]
    })
    return res.json(users);
  }
}