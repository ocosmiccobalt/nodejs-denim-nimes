import mysql from 'mysql2/promise';

const isDevelopment = !process.env.DB_STATUS || process.env.DB_STATUS === 'development';

let config;

if (isDevelopment) {
  config = {
    host: process.env.DEV_DB_HOST,
    database: process.env.DEV_DB,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS
  };
} else {
  config = {
    host: process.env.DB_HOST,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectTimeout: 60000
  };
}

const pool = mysql.createPool(config);

export default pool;
