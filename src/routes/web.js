const express = require('express');
const router = express.Router();
const {getHomepage, hoidanit, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser} = require('../controllers/homeController');
router.get('/', getHomepage);
router.get('/hoidanit', hoidanit);
router.get('/create',getCreatePage);
router.post('/create-user',postCreateUser);
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);
router.post('/delete-user', postDeleteUser);
module.exports = router