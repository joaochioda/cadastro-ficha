const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Objeto = require('../models/Objeto');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Objeto.init(connection);

Address.associate(connection.models)
User.associate(connection.models)
Objeto.associate(connection.models)

module.exports = connection;
