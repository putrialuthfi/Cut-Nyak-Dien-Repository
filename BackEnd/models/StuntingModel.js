import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Stunting = sequelize.define('Stunting', {
  namaLengkap: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tanggalLahir: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  jenisKelamin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prematur: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  beratBadan: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lingkarKepala: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  golonganDarah: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tinggiBadan: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  alergi: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'stunting',
  timestamps: false,
});

export default Stunting;



// import { Sequelize } from "sequelize";
// import db from "../config/database.js";


// const {DataTypes} = Sequelize;

// const Stunting = db.define('stuntings', {
//     nama_lengkap:{
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     tgl_lahir: {
//         type: DataTypes.DATE,
//         allowNull: false,
//     },
//     jenis_kelamin: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     prematur: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     berat_badan: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     lingkar_kepala: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     gol_darah: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     tinggi_badan: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     alergi: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     freezeTableName:true,
//     timestamps: false
// });

// export default Stunting;

// (async()=>{
//     await db.sync();
// })();