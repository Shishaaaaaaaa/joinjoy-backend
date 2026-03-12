const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'mysql-1066d366-silpakorn-joinjoy.j.aivencloud.com',
    user: 'avnadmin',
    password: 'YOUR_PASSWORD',
    database: 'defaultdb',
    port: 16356,
    waitForConnections: true,
    connectionLimit: 10,
    ssl: {
        rejectUnauthorized: false // เพิ่มบรรทัดนี้เพื่อให้เชื่อมต่อ Cloud ได้
    }
});

module.exports = pool.promise();
