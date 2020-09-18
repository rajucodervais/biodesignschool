const User = require('../models/studentModel');
const Education = require('../models/stuEducation');
const Upload = require('../models/uploadModel');
const {Op} = require('sequelize');

async function index(req, res) {
    const user = await User.findAll({where:{email: req.session.email}});
    console.log(user)
    res.render('users/index',{user:user, loggedIn:req.session.loggedIn})
}

async function store(req, res){
    console.log(req.body);
}

module.exports = {
    index:index,
    store:store
}