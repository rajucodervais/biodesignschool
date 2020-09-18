const Sequelize = require('sequelize');
const sequelize = require('../config/db');
module.exports = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    full_name: Sequelize.STRING(200),
    father_name: Sequelize.STRING(200),
    dob: Sequelize.DATEONLY,
    gender: Sequelize.STRING(10),
    house_no: Sequelize.STRING(200),
    street: Sequelize.STRING(200),
    landmark: Sequelize.STRING(150),
    country: Sequelize.STRING(150),
    state: Sequelize.STRING(150),
    city: Sequelize.STRING(150),
    pincode: Sequelize.INTEGER(11),
    current_house_no: Sequelize.STRING(200),
    current_street: Sequelize.STRING(200),
    current_landmark: Sequelize.STRING(150),
    current_country: Sequelize.STRING(150),
    current_state: Sequelize.STRING(150),
    current_city: Sequelize.STRING(150),
    current_pincode: Sequelize.INTEGER(11),
    email: Sequelize.STRING(45),
    alter_email: Sequelize.STRING(45),
    mobile: Sequelize.BIGINT(20),
    alter_mobile: Sequelize.BIGINT(20),
    password: Sequelize.STRING(200),
    registration_no: Sequelize.STRING(45),
    status: Sequelize.TINYINT(1)
   },
    {
    timestamps: true
});