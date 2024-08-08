const connection = require('../config/database');


const getHomepage = (req, res) => {
    let users = [];
    connection.query('SELECT * FROM Users', (err, rows, fields) => {
        users = rows;
        console.log("connection >>> ", rows);
        res.send(JSON.stringify(users));
    })

    
}

const hoidanit = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage
    , hoidanit
}