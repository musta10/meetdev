const express = require('express')
const routes = express.Router();
const Mydb = require('../database');
const bcrypt = require('bcrypt');
const config = require('./config');
const jwt = require('jsonwebtoken');
const saltRounds = 10;


// CONEXION USERS

routes.post('/signUp', (req,res) => {
    console.log(req.body);
    try {
        if (!req.body.name) throw 'NO NAME'
        if (!req.body.email) throw 'NO EMAIL'
        if (!req.body.password) throw 'NO PASSWORD'
        if (!req.body.photo) throw 'NO PHOTO'
        bcrypt.genSalt(saltRounds, (err, salt) =>{
            bcrypt.hash(req.body.password, salt, (err, hash) =>{
                console.log(hash);
                let sql = `INSERT INTO users (name, email, password, photo) VALUES ('${req.body.name}','${req.body.email}','${hash}','${req.body.photo}')`;
                Mydb.query(sql, function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result)
                })
            })
        })

    } catch (err) {
        res.status(403).send(err)
    }

})



module.exports = routes;
