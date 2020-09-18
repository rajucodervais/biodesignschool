const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const postModel = require('./postModel');
const studentModel = require('./studentModel');
module.exports = sequelize.define('applied', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    student_id: {
        type: Sequelize.INTEGER(11),
        references: {
            model: studentModel,
            key: 'id'
        }
    },
    post_id: {
        type: Sequelize.INTEGER(11),
        references: {
            model: postModel,
            key: 'id'
        }
    }
   },
{
    timestamps: true
});