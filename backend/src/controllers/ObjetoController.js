const User = require('../models/User');
const Objeto = require('../models/Objeto');

module.exports = {
    async store(req, res) {
      const { user_id } = req.params;
      const { name } = req.body;

      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(400).json({ error: 'User not found'});
      }
      const [ objeto ] = await Objeto.findOrCreate({ where: { name }})

      await user.addObjeto(objeto);

      return res.json(objeto);
    },
    async index(req, res) {
  
    },
}