const User = require('../models/User');
const {uploadSingleFile, uploadMultipleFiles} = require('../services/fileService');
const getUserApi = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    );
}

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.username;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    });
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );
}
const putUpdateUserAPI = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.username;
    let city = req.body.city;
    let user = await User.updateOne({ _id: id }, {
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );
}

const deleteUserAPI = async (req, res) => {
    let id = req.body.id;
    let user = await User.deleteOne({ _id: id });
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    );
}

const postUploadSingleFile = async (req, res) => {

    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploadSingleFile(req.files.image);
    console.log("result: ", result);
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await postUploadSingleFile(req, res);
    }
}

module.exports = {
    getUserApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFile,
    postUploadMultipleFilesAPI
}