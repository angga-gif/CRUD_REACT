import {Sequelize} from "sequelize";

const db = new Sequelize('crud.db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;