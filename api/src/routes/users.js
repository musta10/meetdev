const express = require('express')
const routes = express.Router();
const Mydb = require('../database');
const bcrypt = require('bcrypt');
const config = require('../configDb');
const jwt = require('jsonwebtoken');
const saltRounds = 10;


// CONEXION USERS


// SIGN-UP
routes.post('/signUp', (req,res) => {
    // console.log(req.body);
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

// SIGN-IN
routes.post('/signIn', (req, res) => {
    const password = req.body.password
    const email = req.body.email
    Mydb.query(`SELECT * FROM users WHERE email = '${email}'`, function (err, result){
        console.log(result);
        if (err) {
            res.send('non')
        } else {
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, function (error, results) {
                    console.log(results)
                    if (results === true) {
                        let token = jwt.sign({ id: result[0].id, email: result[0].email, name:result[0].name }, config.secret,{expiresIn: 86400,});
                        console.log(token)
                        res.send({ token: token })
                        console.log('Your connected')
                    } else {
                        console.log('who are you')
                    }
                })
            } else {
                console.log('NO email')
            }

        }
    })
})

// SIGN-OUT SE DECONNECTER


// AJOUTE EVENEMENT
console.log('teyetst');

routes.post('/addEvent', (req, res) => {
  
  const description = req.body.description;
  const date = req.body.date;

  Mydb.query(
    `INSERT INTO events (description, date) VALUES ('${description}','${date}')`, function
    (err, result) {
        console.log(result);
        if(err) {
            console.log(err);
        } else {
            res.send('bien reçu');
        }
    }
  );

});


//  PROFILE USER
routes.get('/profile/:id', (req, res) =>{
    try{
        if (!req.params.id) throw 'NO USER'
        Mydb.query(`SELECT * FROM users WHERE users.id = ${req.params.id}`, function (err, result) {
            if (err) throw err;
            console.log(req.params.id);
            res.send(result);
            console.log(result);

        });

    } catch(err) {
        res.send(403).send(err);
    }
});



// routes.put('/profile:id', (req, res) =>{
//     if (!req.params.id) throw 'NO USER'
//     const newProfile = req.body
//     Mydb.query(`UPDATE users set ? WHERE id = ${newProfile}, ${id}`, (err, rows) =>{
//         res.redirect('/');
//     });
// });



module.exports = routes;
