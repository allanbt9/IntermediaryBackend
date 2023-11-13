import { DataType, DataTypes } from "sequelize"; //vai trabalhar com os tipos do banco de dados e facilitar o tratamento dos tipos das entidades
import sequelize from "../utils/database.js";

const User = sequelize.define( 'users', {//agora a lista de atributos do usuário, pq users será o nome da primeira tabela
//a seguir os atributos dessa tabela users
   id: {
      type: DataTypes.INTEGER, //id é do tipo inteiro
      autoIncrement: true, //pra cada adicação nova no id ele irá incrementar no BD automaticamente
      allowNull: false, //falando que nao pode ser um campo nulo
      primaryKey: true //a chave primária
   },
   first_name: {
      type: DataTypes.STRING,
      allowNull: false

   },
   last_name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: DataTypes.STRING,
   gender: DataTypes.STRING

},{underscored : true});

export default User;