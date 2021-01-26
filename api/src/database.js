'use strict';

const mysql = require('mysql2');

var Myconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'musta1010',
    database: 'mustadev'
})

Myconnection.connect(function (err){
    if(err){
        throw err
     }else{
        console.log('DB est Connecté');
     }
});

module.exports = Myconnection;