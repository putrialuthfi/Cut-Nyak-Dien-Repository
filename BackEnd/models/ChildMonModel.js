import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const ChildMon = db.define('childmons', {
    nama_anak:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tgl_imunisasi: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    nama_imunisasi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    keterangan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default ChildMon;

(async()=>{
    await db.sync();
})();