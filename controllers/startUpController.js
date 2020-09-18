const StartUp = require('../models/startUpModel');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const session = require('express-session');
var multer = require('multer');

async function index(req, res) {
    var result = await StartUp.findAll();
    res.render('admin/start_ups/index', { result: result })
    
}

async function index_projects(req, res) {
    var result = await StartUp.findAll();
    if (result.length != 0) {
        res.render('admin/start_ups/index', { result: result })
    } else {
        res.render('admin/start_ups/index', { message: "data not found" });
    }
}
async function index_third_party(req, res) {
    var result = await StartUp.findAll();
    if (result.length != 0) {
        res.render('admin/start_ups/index', { result: result })
    } else {
        res.render('admin/start_ups/index', { message: "data not found" });
    }
}

function create(req, res) {
    res.render('admin/start_ups/create');
}

async function store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('errors', errors.array()[0].msg);
        res.redirect('/admin/start-ups/create');
    }
    else {
        const { image, logo, founder, co_founder,link,type,years,content } = req.body;
        var uri = image.toDataURL('image/png'),
        b64 = uri.replace(/^data:image.+;base64,/, '');
        console.log(b64); 
        console.log(image)
        console.log(logo)
        console.log(founder)
        console.log(co_founder)

        console.log(link)
        console.log(type)
        console.log(years)
        console.log(content)
        console.log('store')
    //     var Storage = multer.diskStorage({
    //         destination: function(req, file, callback) {
    //             callback(null, "./Images");
    //         },
    //         filename: function(req, file, callback) {
    //             callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    //         }
    //     });
        
    //     var upload = multer({
    //         storage: Storage
    //     }).array("imgUploader", 3); //Field name and max count
    //     var result = await StartUp.create({
    //         image: image,
    //         logo: logo,
    //         founder: founder,
    //         co_founder: co_founder,
    //         link: link,
    //         type: type,
    //         years: years,
    //         content: content,
    //     });
    //     if (result) {
    //         req.flash('success', 'Created Successfully~!');
    //         res.redirect('/admin/start-ups');
    //     } else {
    //         req.flash('errors', 'Something is error');
    //         res.redirect('/admin/start-ups/create');
    //     }

    }


}

async function edit(req, res, next) {
    console.log(req.params.id);
    var result = await Admin.findAll({ where: { id: req.params.id } });
    res.render('admin/start_ups/edit', { result: result });
}

async function update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({
            status: false,
            msg: errors.array()[0].msg
        })
    }
    else {
       
        const { id, email, first_name, last_name } = req.body;

        var result = await Admin.update({
            first_name: first_name,
            last_name: last_name,
            email: email
        }, { where: { id: id } });
        if (result) {
            req.flash('success', 'Admin Updated Successfully~!');
            res.redirect('/admin/start_ups');
        } else {
            req.flash('errors', 'Something is error');
            res.redirect('/admin/start_ups');
        }

    }


}

async function destroy(req, res, next) {
    var id = req.params.id;
    var result = await Admin.destroy({ where: { id: id } });
    req.flash('success', 'Admin Deleted Successfully~!');
    res.redirect('/admin/start_ups');
}

async function view(req, res, next) {
    var id = req.params.id;
    var result = await Admin.destroy({ where: { id: id } });
    res.render('admin/start_ups/view',{result:result});
}
module.exports = {
    index: index,
    index_projects: index_projects,
    index_third_party: index_third_party,
    create: create,
    store: store,
    edit: edit,
    update: update,
    destroy: destroy,
    view: view
}

