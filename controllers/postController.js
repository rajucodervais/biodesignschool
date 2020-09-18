const Post = require('../models/postModel');
const { Op, where } = require('sequelize');
const { validationResult } = require('express-validator');
var slug = require('slug')

async function index(req, res) {
    if (req.session.loggedIn) {
        var result = await Post.findAll();
            res.render('admin/posts/index',{posts:result, session:req.session})
    }
}
function create(req, res) {
    res.render('admin/posts/create');
}
async function store(req, res) {
    const {title, description, date_published, from_date, to_date} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            status: false,
            msg: errors.array()[0].msg
        })
    }

    else {
        var result = await Post.create({
            title:title,
            description:description,
            date_published:date_published,
            from_date:from_date,
            to_date:to_date,
            slug:slugify(title)
        });
        console.log(result);
        if (result.length > 0) {
            req.flash('Msg', 'Post Submitted');
            res.redirect('/posts');
        }else{
            req.flash('Msg', 'Something is error');
            res.redirect('/posts/create');
        }
    }
}
async function edit(req, res) {
    var id = req.params.id;
    var result = await Post.findAll({where:{id:id}});
    res.render('admin/posts/edit',{posts:result})
}

async function update(req, res) {
    const {id, title, description, date_published, from_date, to_date} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            status: false,
            msg: errors.array()[0].msg
        })
    }

    else {
        var result = await Post.update({
            title:title,
            description:description,
            date_published:date_published,
            from_date:from_date,
            to_date:to_date,
            slug:slugify(title)
        },{where:{id:id}});
        console.log(result);
        if (result.length > 0) {
            req.flash('Msg', 'Post Updated');
            res.redirect('/posts');
        }else{
            req.flash('ErrorMsg', 'Something is error');
            res.redirect('/posts/Edit');
        }
    }
}
async function destroy(req, res) {
    var id = req.params.id;
    var result = await Post.destroy({where:{id:id}});
    req.flash('Msg', 'Post Deleted');
    res.redirect('/posts');
}

async function view(req, res) {
    var id = req.params.id;
    var result = await Post.findAll({where:{id:id}});
    res.render('admin/posts/view',{posts:result})
}

function ckUploader(req, res) {
    var fs = require('fs');
    fs.readFile(req.files.upload.path, function (err, data) {
        var newPath = __dirname +'/../public/uploads/' + req.files.upload.name;
        fs.writeFile(newPath, data, function (err) {
            if (err) console.log({err: err});
            else {
               var html = "";
                html += "<script type='text/javascript'>";
                html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
                html += "    var url     = \"./public/uploads/" + req.files.upload.name + "\";";
                html += "    var message = \"Uploaded file successfully\";";
                html += "";
                html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
                html += "</script>";
                console.log("./public/uploads/" + req.files.upload.name);
                res.send(html);
                
            }
        });
    });
}



module.exports = {
    index: index,
    create: create,
    store: store,
    edit: edit,
    update: update,
    destroy: destroy,
    view: view,
    ckUploader:ckUploader
}

function slugify(text) {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"
  
    const newText = text.split('').map(
      (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
  
    return newText
      .toString()                     // Cast to string
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                         // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-y-')           // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }