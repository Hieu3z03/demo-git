const connection = require('../config/database');
const { getAllUser, updateUserById, getUserById, deleteUserById } = require('../services/CRUDService');
const User = require('../models/User');

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUser: results });
}

const hoidanit = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.username;
    let city = req.body.city;
    await User.create({
        email: email, 
        name: name, 
        city: city
    });
    res.redirect('/');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    let results = await User.findById(userID).exec();
    res.render('edit.ejs', { userEdit: results });
}

const postUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.username;
    let city = req.body.city;
    await User.updateOne({ _id: id }, {
        email: email,
        name: name,
        city: city
    })
    return res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    let id = req.body.id;
    await User.deleteOne({ _id: id });
    return res.redirect('/');
}

module.exports = {
    getHomepage,
    hoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser
}