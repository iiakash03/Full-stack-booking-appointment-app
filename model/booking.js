const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Book= sequelize.define('book',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    username:Sequelize.STRING,
    phone:{
        type:Sequelize.TEXT,
        //allowNull:false,
    },

    email:{
        type:Sequelize.TEXT,
        //allowNull:false,
    },

})

module.exports=Book;