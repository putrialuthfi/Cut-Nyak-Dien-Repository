import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const Schedule = db.define('schedules', {
    tanggal:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    waktu: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    lokasi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kegiatan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true
});

export default Schedule;

(async()=>{
    await db.sync();
})();