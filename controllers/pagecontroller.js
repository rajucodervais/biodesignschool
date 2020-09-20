const Post = require('../models/postModel');
const User = require('../models/studentModel');
const stuEducation = require('../models/stuEducation');
const Upload = require('../models/uploadModel');
const Applied = require('../models/appliedModel');
const StartUp = require('../models/startUpModel');
const Collaborators = require('../models/collaboratorModel');
const { Op} = require('sequelize');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const { validationResult } = require('express-validator');


async function index(req, res) {
    var post =await Post.findAll();
    console.log(post);
    res.render('index', { 'posts': post });
}
async function post(req, res, next) {
    var slug = req.params.slug;
    console.log(slug);
    var post =await Post.findAll({where:{'slug':slug}});
    res.render('page', { 'posts': post });
}

function register(req, res, next) {
    var slug = req.params.slug;
    res.render('register', {slug:slug});
}

async function userRegistration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('err', errors.array()[0].msg);
        res.redirect('/register/:slug');
        
    }
    else {
        const { full_name, father_name, dob, gender,email,mobile, password} = req.body;
        console.log(email)
        var checkemail = await User.findAll({ where: { 'email': email } })
        if (checkemail.length == 1) {
            req.flash('success', 'Email is already used!');
            res.redirect('/register/:slug');
        } else {
            var result = await User.create({
                full_name: full_name,
                father_name: father_name,
                dob:dob,
                gender:gender,
                email:email,
                mobile:mobile,
                password:bcrypt.hashSync(password, salt)
            });
            if (result) {
                req.flash('success', 'You are Registered Successfully');
                res.redirect('/register/:slug');
            } else {
                req.flash('err', 'Something is error');
                res.redirect('/register/:slug');
            }    
        }
        
    }

}

async function userLogin(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('err', errors.array()[0].msg);
        res.redirect('/register/:slug');
    }
    else {
        const { loginemail, loginpassword} = req.body;
        var getAll = await User.findAll({ where: { 'email': loginemail } })
        if (getAll.length == 1) {
            if (bcrypt.compareSync(loginpassword, getAll[0].password)) {
                req.session.email = loginemail;
                req.session.first_name = getAll[0].full_name;
                req.session.father_name = getAll[0].father_name;
                req.session.loggedIn = true;
                res.redirect('/users');    
            } else {
                req.flash('err', 'Password is not matched');
                res.redirect('/register/:slug');
            }
        } else {
            req.flash('err', 'Credential does not match!');
            res.redirect('/register/:slug');     
        }
        
    }
}


// pages
async function about(req, res) {
    var post =await Post.findAll();
    res.render('about', { 'posts': post });
}

async function fellowship(req, res) {
    var post =await Post.findAll();
    res.render('fellowship', { 'posts': post });
}

async function partners(req, res) {
    var startUp =await StartUp.findAll({where:{type:'1'}});
    var collab =await Collaborators.findAll();
    res.render('partners', { 'startup': startUp, 'collab':collab });
}

async function start_ups(req, res) {
    var startUp =await StartUp.findAll({where:{type:'1'}});
    res.render('start_ups', { 'startup': startUp });
}

async function projects(req, res) {
    var projects =await StartUp.findAll({where:{type:'2'}});
    var thirdParty =await StartUp.findAll({where:{type:'3'}});
    res.render('projects', { 'projects': projects, 'thirdparty':thirdParty });
}

async function meditech(req, res) {
    var post =await Post.findAll();
    res.render('about', { 'posts': post });
}
module.exports = {
    index: index,
    post: post,
    register:register,
    userRegistration:userRegistration,
    userLogin:userLogin,
    about:about,
    fellowship:fellowship,
    partners:partners,
    start_ups:start_ups,
    projects:projects,
    meditech:meditech

}