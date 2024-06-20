import { Sequelize } from "sequelize";

const db = new Sequelize('db_posyandu', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;


// import { Sequelize } from "sequelize";

// const db = new Sequelize('db_posyandu', 'root', '',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

// // koneksi ke notes_db
// const notes_db = new Sequelize('notes_db', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// export default {db, notes_db};