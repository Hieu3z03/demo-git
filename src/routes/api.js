const express = require('express');
const { getUserApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile, postUploadMultipleFilesAPI } = require('../controllers/apiController');
const { postCreateCustomer } = require('../controllers/customerController');
const routerAPI = express.Router();

routerAPI.get('/users', getUserApi);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadMultipleFilesAPI);

routerAPI.post('/customer', postCreateCustomer);



module.exports = routerAPI;
