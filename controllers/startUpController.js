const StartUp = require('../models/startUpModel');
const { Op, or } = require('sequelize');
const { validationResult } = require('express-validator');
const session = require('express-session');
const fs = require("fs")
async function index(req, res) {
    var result = await StartUp.findAll();
    res.render('admin/start_ups/index', { result: result })

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
        const { founder, co_founder, link, type, years, content, place } = req.body;
        try {
            if (!req.files) {
                req.flash('errors', 'no files were uploaded');
                res.redirect('/admin/start-ups/create');
            }
            var file_image = req.files.image;
            var img_name = Date.now() + '-' + file_image.name;
            
            if (file_image.mimetype == "image/jpeg" || file_image.mimetype == "image/png" || file_image.mimetype == "image/gif") {
                file_image.mv('public/uploads/' + img_name, async function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    var logo_name = null;
                    if (req.files.logo) {
                        var file_logo = req.files.logo;
                        var logo_name = Date.now() + '-' + file_logo.name;
                        file_logo.mv('public/uploads/' + logo_name);    
                    }
                    var result = await StartUp.create({
                        image: img_name,
                        logo: logo_name,
                        founder: founder,
                        co_founder: co_founder,
                        link: link,
                        type: type,
                        years: years,
                        content: content,
                        place:place
                    });
                    if (result) {
                        req.flash('success', 'created Successfully');
                        res.redirect('/admin/start-ups');
                    } else {
                        req.flash('errors', 'Something is error');
                        res.redirect('/admin/start-ups/create');
                    }


                });
            } else {
                req.flash('errors', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
                res.redirect('/admin/start-ups/create');
            }

        } catch (error) {
            req.flash('errors', error);
            res.redirect('/admin/start-ups/create');
        }
    }
}

async function edit(req, res, next) {
    var result = await StartUp.findAll({ where: { id: req.params.id } });
    res.render('admin/start_ups/edit', { result: result });
}

async function update(req, res) {
    const { id, founder, co_founder, link, type, years, content, place } = req.body;
    
    try {
        var findData = await StartUp.findAll({ where: { id: id } });
        
        if (!req.files) {
            console.log('filenot found')
            var result = await StartUp.update({
                founder: founder,
                co_founder: co_founder,
                link: link,
                type: type,
                years: years,
                content: content,
                place:place
            }, { where: { id: id } });
            if (result) {
                req.flash('success', 'updated Successfully');
                res.redirect('/admin/start-ups');
            } else {
                req.flash('errors', 'Something is error');
                res.redirect('/admin/start-ups/edit' + id);
            }

        } else if (req.files.image) {
            var file_image = req.files.image;
            var img_name = Date.now() + '-' + file_image.name;
            if (file_image.mimetype == "image/jpeg" || file_image.mimetype == "image/png" || file_image.mimetype == "image/gif") {
                file_image.mv('public/uploads/' + img_name, async function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    var filePath = 'public/uploads/' + findData[0].image;
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                    var result = await StartUp.update({
                        image: img_name,
                        founder: founder,
                        co_founder: co_founder,
                        link: link,
                        type: type,
                        years: years,
                        content: content,
                        place:place
                    }, { where: { id: id } });
                    if (result) {
                        req.flash('success', 'updated Successfully');
                        res.redirect('/admin/start-ups');
                    } else {
                        req.flash('errors', 'Something is error');
                        res.redirect('/admin/start-ups/edit' + id);
                    }


                });
            } else {
                req.flash('errors', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
                res.redirect('/admin/start-ups/edit' + id);
            }
        } else if (req.files.logo) {
            var file_logo = req.files.logo;
            var logo_name = Date.now() + '-' + file_logo.name;
            console.log('logo found')
            if (file_logo.mimetype == "image/jpeg" || file_logo.mimetype == "image/png" || file_logo.mimetype == "image/gif") {
                file_logo.mv('public/uploads/' + logo_name, async function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    var filePath = 'public/uploads/' + findData[0].logo;
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                    var result = await StartUp.update({
                        logo: logo_name,
                        founder: founder,
                        co_founder: co_founder,
                        link: link,
                        type: type,
                        years: years,
                        content: content,
                        place:place
                    }, { where: { id: id } });
                    if (result) {
                        req.flash('success', 'updated Successfully');
                        res.redirect('/admin/start-ups');
                    } else {
                        req.flash('errors', 'Something is error');
                        res.redirect('/admin/start-ups/edit' + id);
                    }


                });
            } else {
                req.flash('errors', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
                res.redirect('/admin/start-ups/edit' + id);
            }
        } else {
            console.log('both found')
            var file_image = req.files.image;
            var img_name = Date.now() + '-' + file_image.name;
            var file_logo = req.files.logo;
            var logo_name = Date.now() + '-' + file_logo.name;
            if (file_image.mimetype == "image/jpeg" || file_image.mimetype == "image/png" || file_image.mimetype == "image/gif") {
                file_image.mv('public/uploads/' + img_name, async function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    file_image.mv('public/uploads/' + logo_name);
                    var filePath = 'public/uploads/' + findData[0].image;
                    console.log(filePath);
                    if (fs.existsSync(filePath)) {
                        console.log(filePath)
                        fs.unlinkSync(filePath);
                    }
                    var filePath1 = 'public/uploads/' + findData[0].logo;
                    if (fs.existsSync(filePath1)) {
                        fs.unlinkSync(filePath1);
                    }
                    var result = await StartUp.create({
                        image: img_name,
                        logo: logo_name,
                        founder: founder,
                        co_founder: co_founder,
                        link: link,
                        type: type,
                        years: years,
                        content: content,
                        place:place
                    }, { where: { id: id } });
                    if (result) {
                        req.flash('success', 'updated Successfully');
                        res.redirect('/admin/start-ups');
                    } else {
                        req.flash('errors', 'Something is error');
                        res.redirect('/admin/start-ups/edit' + id);
                    }
                });
            } else {
                req.flash('errors', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
                res.redirect('/admin/start-ups/edit' + id);
            }
        }
    } catch (error) {
        console.log('catch')
        req.flash('errors', error);
        res.redirect('/admin/start-ups');
    }
}

async function destroy(req, res, next) {
    var id = req.params.id;
    var findData = await StartUp.findAll({ where: { id: id } });
    console.log(findData[0].image);
    var filePath = 'public/uploads/' + findData[0].image;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    var filePath1 = 'public/uploads/' + findData[0].logo;
    if (fs.existsSync(filePath1)) {
        fs.unlinkSync(filePath1);
    }
    var result = await StartUp.destroy({ where: { id: id } });
    req.flash('success', 'Deleted Successfully~!');
    res.redirect('/admin/start-ups');
}

async function view(req, res, next) {
    var id = req.params.id;
    var result = await StartUp.destroy({ where: { id: id } });
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

