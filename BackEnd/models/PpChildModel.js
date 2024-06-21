import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const PpChild = db.define('ppchilds', {
    gambar_profil: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps: false
});

export default PpChild;

(async()=>{
    await db.sync();
})();