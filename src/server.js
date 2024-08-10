require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webBrower = require('./routes/web');
const connection = require('./config/database');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use('/', webBrower);


const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Hieudz' });
silence.save();


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
