const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2012001',
    database: 'users_db'
});

module.exports = pool.promise();
