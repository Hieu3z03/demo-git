const connection = require('../config/database');
const getAllUser = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users`);
    return results;
}
const updateUserById = async (id, email, name, city) => {
    let [results, fields] = await connection.query(`UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, id]);
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [id]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(`DELETE FROM Users WHERE id = ?`, [id]);
}

module.exports = {
    getAllUser,
    updateUserById,
    getUserById,
    deleteUserById
}