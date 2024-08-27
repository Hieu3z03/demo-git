require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webBrower = require('./routes/web');
const apiBrower = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(fileUpload());

app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);

//khoi tao route
app.use('/', webBrower);
app.use('/v1/api/', apiBrower);

//test connection
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("Error: ", error);
    }
})()
