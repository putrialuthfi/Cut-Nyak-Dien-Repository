import { Sequelize } from "sequelize";

const db = new Sequelize('db_posyandu', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;