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

// CONEXION ADMIN
routes.post('/dashboard', (req, res) =>{
    const password = req.body.password
    const email = req.body.email;
    Mydb.query(`SELECT * FROM admin WHERE email = '${req.body.email}'`, function (err,result) {
        console.log(result);
        if (err) {
            res.send('non')
        } else {
            if (result.length >0) {
                bcrypt.compare(password, result[0].password, function(error, results){
                    console.log(results);
                    if(results === true) {
                        let token = jwt.sign({email: result[0].email, id: result[0].id, isAdmin: true}, config.secret, {expiresIn: 86400})
                        console.log(token);
                        res.send({ token: token })
                        console.log('you are admin')
                    } else {
                        console.log('who are you')
                        console.log(results);
                    }
                })
            } else {
                console.log('faux mail')
            }
        }
    })
})
routes.use("/addEvent", (req, res, next) => {
    const authHeader = req.headers.token
    console.log(req.headers)
    const token = authHeader

    if (token) { 
        console.log(token)
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) { 
                console.log(err)
                res.status(403).send('oho');
            } else {
                console.log('test');
                next()
            }
        })

    } else { 
        console.log('bonjour')
        res.status(403).send('oui');
    }

});



// AJOUTE EVENEMENT
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


routes.post('/Forum', (req, res) => {
    const name = req.body.name
    const commentaire = req.body.commentaire
    const date_publication = req.body.date_publication
    const FK_users_id = req.body.user_id
    const FK_events_id = req.body.event_id

    Mydb.query(`INSERT INTO commentaires (name, commentaire, date_publication, FK_users_id, FK_events_id  ) VALUES ('${name}', '${commentaire}','${date_publication}', '${FK_users_id}', '${FK_events_id}')`, function (err, result) {
        console.log(result);
        if(err) {
            console.log(err);
        } else {
            res.send('bien reçu');
        }
    });

})

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
