const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('collaborators', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    // username: Sequelize.STRING(50),
    collab_name: Sequelize.STRING(100),
    images: Sequelize.STRING(200)
   },
{
    timestamps: true
});