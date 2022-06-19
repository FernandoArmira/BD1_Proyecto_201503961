import mysql from 'mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
})

/*pool.getConnection()
.then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connectedS');
});*/

export default pool;