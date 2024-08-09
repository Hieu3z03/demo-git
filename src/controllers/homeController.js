const connection = require('../config/database');
const { getAllUser, updateUserById, getUserById, deleteUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUser: results });
}

const hoidanit = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.username;
    let city = req.body.city;
    // let {email, name, city} = req.body;
    let [results, fields] = await connection.query(`INSERT INTO 
        Users (email, name, city) 
        VALUES (?, ?, ?)`, [email, name, city])

    console.log(">>>>>>results: ", results);
    res.redirect('/');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const id = req.params.id;
    let results = await getUserById(id);
    res.render('edit.ejs', { userEdit: results });
}

const postUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.username;
    let city = req.body.city;
    await updateUserById(id, email, name, city);
    return res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    let id = req.body.id;
    await deleteUserById(id);
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