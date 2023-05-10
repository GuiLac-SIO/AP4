// require("dotenv").config();
// const mysql = require("mysql2/promise");
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });
// module.exports = pool;
 
require("dotenv").config();
const sql = require('mssql/msnodesqlv8');

const config = {
  database : 'Ap4',
  server: 'GUILLAUME',
 // user: process.env.DB_USERNAME,
  driver :'msnodesqlv8',
 // password: process.env.DB_PASSWORD,
  database: 'AP4',
  options: { 
    trustServerCertificate : true,
 
    enableArithAbort : true,
    instancename :'SQLEXPRESS',
    trustedConnection: true
  },
};


const pool = new sql.ConnectionPool(config);
pool.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = pool;

// //------------------------LA connection BDD QUI MARCHE sans auth Windows-----------------------------
// // require("dotenv").config();
// // const mysql = require("mysql2/promise");
// // const pool = mysql.createPool({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   database: process.env.DB_NAME,
// //   password: process.env.DB_PASSWORD,
// // });
// // module.exports = pool;
 
// require("dotenv").config();
// const sql = require('mssql/msnodesqlv8');

// const config = {
//   database : 'Ap4',
//   server: 'GUILLAUME',
//  user: 'guillac45',
//   driver :'msnodesqlv8',
//   password: 'guigui45',
//   database: 'AP4',
//   options: { 
//     trustServerCertificate : true,
//     trustedConnection: false,
//     enableArithAbort : true,
//     instancename :'SQLEXPRESS'
//   },
// };


// const pool = new sql.ConnectionPool(config);
// pool.connect(err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Connected to the database');
// });

// module.exports = pool;
