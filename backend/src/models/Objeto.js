const { Model, DataTypes } = require('sequelize');

class Objeto extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'objetos',
        })
    }

    static associate(models) {
      this.belongsToMany(models.User, { foreignKey: 'objeto_id', through: 'user_objeto', as: 'users'})
    }
}

module.exports = Objeto;