import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const Stunting = db.define('stunting', {
    nama_lengkap:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tgl_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prematur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    berat_badan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lingkar_kepala: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gol_darah: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tinggi_badan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    alergi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true
});

export default Stunting;

(async()=>{
    await db.sync();
})();