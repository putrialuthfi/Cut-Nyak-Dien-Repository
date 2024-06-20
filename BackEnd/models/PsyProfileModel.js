import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const PsyProfile = db.define('psyprofile', {
    namapsy:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamatpsy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jmlkegiatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jmlkader: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName:true
});

export default PsyProfile;

(async()=>{
    await db.sync();
})();