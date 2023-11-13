import {Sequelize} from "sequelize"

const sequelize = new Sequelize(
    'lgpd-database',
    'postgres',
    'postgres',
    {//agora as configurações da nossa conexão
       host: 'localhost',
       dialect: 'postgres',
       port: 5432,//porta padrão do postgres
       define:{
        timestamps: false
       } 
    }
);

export default sequelize