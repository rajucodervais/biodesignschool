const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('start_ups', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    image: Sequelize.STRING(70),
    logo: Sequelize.STRING(200),
    years: Sequelize.STRING(10),
    founder: Sequelize.STRING(100),
    co_founder: Sequelize.STRING(100),
    place: Sequelize.STRING(250),
    content:Sequelize.TEXT(),
    link:Sequelize.STRING(200),
    type:Sequelize.STRING(100)
},
{
    timestamps: true
});