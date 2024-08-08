require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webBrower = require('./routes/web');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use('/', webBrower);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})