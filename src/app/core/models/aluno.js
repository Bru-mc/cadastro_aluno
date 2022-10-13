import Sequelize from "sequelize";
import db from "../../../../database/db.js";

let AlunoRepository =  db.define('aluno', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(80),
        allowNull: false,
    },
    primeiraNota: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    segundaNota: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    media:{
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    situacao:{
        type: Sequelize.STRING(12),
        allowNull: true
    }
});

export default AlunoRepository;