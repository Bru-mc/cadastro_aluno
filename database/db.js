import { Sequelize } from "sequelize";

const DBName = "alunosDB";
const DBUser = "postgres";
const DBPassword = "postgres79465";
const DBHost = "localhost";

const sequelize = new Sequelize(DBName, DBUser, DBPassword, {
    host: DBHost,
    dialect: 'postgres'
});

export default sequelize;

