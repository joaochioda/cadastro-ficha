module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'ficha-cadastro',
    define: {
        timestamps: true,//created_at,updated_at
        underscored: true,
    },
}