const express = require('express')
const routes = express.Router();
const Mydb = require('../database');
const bcrypt = require('bcrypt');
const config = require('./config');

routes.post('/add-event', (req, res) =>{
    try {
        if(!req.body.description)throw 'NO DESCRIPTION'
        if(!req.body.date)throw 'NO DATE'
        if(!req.body.FK_users_id)throw 'NO USER_ID'
    } catch(err){
        console.log(err);
        res.status(403).send
    }
})

module.exports = routes;