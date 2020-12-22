const express = require('express')
const routes = express.Router();
const Mydb = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// CONEXION USERS

routes.post('/sign-up', (req,res) => {
    try {
        if (!req.body.name) throw 'NO NAME'
        if (!req.body.email) throw 'NO EMAIL'
        if (!req.body.password) throw 'NO PASSWORD'
        if (!req.body.photo) throw 'NO PHOTO'
        
        

    } catch (err) {
        res.status(403).send(err)
    }

})



module.exports = routes;
