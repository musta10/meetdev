const mysql = require('mysql2');

var Myconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'musta1010',
    database: 'mustadev'
})

Myconnection.connect(function (errr){
    if(errr){
        throw errr;
     }else{
        console.log('DB est Connecté');
     }
});

module.exports = Myconnection;