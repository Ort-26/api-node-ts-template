import mysql from 'mysql2';
require('dotenv').config();

const db: mysql.ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, 
}

export const credentials = {db}