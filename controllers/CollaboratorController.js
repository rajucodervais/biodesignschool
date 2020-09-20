const Collaborator = require('../models/collaboratorModel');
const { Op, or } = require('sequelize');
const { validationResult } = require('express-validator');
const session = require('express-session');
const fs = require("fs")
async function index(req, res) {
    var result = await Collaborator.findAll();
    res.render('admin/collaborators/index', { result: result })

}

function create(req, res) {
    res.render('admin/collaborators/create');
}

async function store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('errors', errors.array()[0].msg);
        res.redirect('/admin/collaborators/create');
    }
    else {
        const {collab_name} = req.body;
        try {
            if (!req.files) {
                req.flash('errors', 'no files were uploaded');
                res.redirect('/admin/collaborators/create');
            }
            var file_image = req.files.images;
            var img_name = Date.now() + '-' + file_image.name;
            if (file_image.mimetype == "image/jpeg" || file_image.mimetype == "image/png" || file_image.mimetype == "image/gif") {
                file_image.mv('public/uploads/' + img_name, async function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    var result = await Collaborator.create({
                        images: img_name,
                        collab_name:collab_name
                    });
                    if (result) {
                        req.flash('success', 'created Successfully');
                        res.redirect('/admin/collaborators');
                    } else {
                        req.flash('errors', 'Something is error');
                        res.redirect('/admin/collaborators/create');
                    }


                });
            } else {
                req.flash('errors', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
                res.redirect('/admin/collaborators/create');
            }

        } catch (error) {
            req.flash('errors', error);
            res.redirect('/admin/collaborators/create');
        }
    }
}

async function edit(req, res, next) {
    var result = await Collaborator.findAll({ where: { id: req.params.id } });
    res.render('admin/collaborators/edit', { result: result });
}

async function update(req, res) {
    const { id, collab_name } = req.body;
    
    try {
        var findData = await Collaborator.findAll({ where: { id: id } });
        if (!req.files) {
            console.log('filenot found')
            var result = await Collaborator.update({
                collab_name: collab_name,
            }, { where: { id: id } });
            if (result) {
                req.flash('success', 'updated Successfully');
                res.redirect('/admin/collaborators');
            } else {
                req.flash('errors', 'Something is error');
                res.redirect('/admin/collaborators/edit' + id);
            }

        } else{
            var file_image = req.files.images;
            var img_name = Date.now() + '-' + file_image.name;
            if (file_image.mimetype == "image/jpeg" || file_image.mimetype == "image/png" || file_image.mimetype == "image/gif") {
                file_image.mv('public/uploads/' + img_name, async function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    var filePath = 'public/uploads/' + findData[0].imagez;
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                    var result = await Collaborator.update({
                        images: img_name,
                        collab_name:collab_name
                    }, { where: { id: id } });
                    if (result) {
                        req.flash('success', 'updated Successfully');
                        res.redirect('/admin/collaborators');
                    } else {
                        req.flash('errors', 'Something is error');
                        res.redirect('/admin/collaborators/edit' + id);
                    }


                });
            } else {
                req.flash('errors', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
                res.redirect('/admin/collaborators/edit' + id);
            }
        }
    } catch (error) {
        console.log('catch')
        req.flash('errors', error);
        res.redirect('/admin/collaborators');
    }
}

async function destroy(req, res, next) {
    var id = req.params.id;
    var findData = await Collaborator.findAll({ where: { id: id } });
    console.log(findData[0].images);
    var filePath = 'public/uploads/' + findData[0].images;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    var result = await Collaborator.destroy({ where: { id: id } });
    req.flash('success', 'Deleted Successfully~!');
    res.redirect('/admin/collaborators');
}

async function view(req, res, next) {
    var id = req.params.id;
    var result = await Collaborator.destroy({ where: { id: id } });
    res.render('admin/start_ups/view', { result: result });
}
module.exports = {
    index: index,
    create: create,
    store: store,
    edit: edit,
    update: update,
    destroy: destroy,
    view: view
}

