const Sequelize = require('sequelize');

const sequelize = new Sequelize('biodesignschool', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "+05:30",
});
if (sequelize) {
    console.log('connected')
}

module.exports = sequelize;
global.sequelize = sequelize;