const express = require("express");
const routes = express.Router();
const Mydb = require("../database");
const bcrypt = require("bcrypt");
const config = require("../configDb");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

// CONEXION USERS

// SIGN-UP
routes.post("/signUp", (req, res) => {
  // console.log(req.body);
  try {
    if (!req.body.name) throw "NO NAME";
    if (!req.body.email) throw "NO EMAIL";
    if (!req.body.password) throw "NO PASSWORD";
    if (!req.body.photo) throw "NO PHOTO";
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        console.log(hash);
        let sql = `INSERT INTO users (name, email, password, photo) VALUES ('${req.body.name}','${req.body.email}','${hash}','${req.body.photo}')`;
        Mydb.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        });
      });
    });
  } catch (err) {
    res.status(403).send(err);
  }
});

// SIGN-IN
routes.post("/signIn", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  Mydb.query(
    `SELECT * FROM users WHERE email = '${email}'`,
    function (err, result) {
      console.log(result);
      if (err) {
        res.send("non");
      } else {
        if (result.length > 0) {
          bcrypt.compare(
            password,
            result[0].password,
            function (error, results) {
              console.log(results);
              if (results === true) {
                let token = jwt.sign(
                  {
                    id: result[0].id,
                    email: result[0].email,
                    name: result[0].name,
                  },
                  config.secret,
                  { expiresIn: 86400 }
                );
                console.log(token);
                res.send({ token: token });
                console.log("Your connected");
              } else {
                console.log("who are you");
              }
            }
          );
        } else {
          res.status(403).send('non identifie')
        }
      }
    }
  );
});



// LISTE COMMENTAIRES
routes.post("/forum", (req, res) => {
  const name = req.body.name;
  const commentaire = req.body.commentaire;
  const date_publication = req.body.date_publication;
  const FK_users_id = req.body.user_id;
  const FK_events_id = req.body.event_id;

  Mydb.query(
    `INSERT INTO commentaires (name, commentaire, date_publication, FK_users_id, FK_events_id  ) VALUES ('${name}', '${commentaire}','${date_publication}', '${FK_users_id}', '${FK_events_id}')`,
    function (err, result) {
      console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.send("bien reçu");
      }
    }
  );
});
// OBTENIR COMMENTAIRES
routes.get("/forum", (req, res) => {
      try {
        Mydb.query(`SELECT * FROM commentaires`, function (err, result) {
          if(err) throw err
          res.send(result)
        })
      } catch (err) {
        res.status(403).send(err)
      }
})

// GET EVENTS
routes.get('/listevents', (req,res) =>{
    try{
      Mydb.query(`SELECT * FROM events`, function (err, result) {
          if (err) throw err;
          res.send(result)

      })
    } catch (err) {
      res.status(403).send(err)
    }
})

routes.put("/events/:id", function (req, res) {
  let events = ` UPDATE events
    SET description = '${req.body.description}', date  = '${req.body.date}' 
    WHERE events.id = ${req.params.id}`;
  Mydb.query(events, function (err, result) {
    if (err) console.log(err);
    res.send(result);
  });
});


// DELETE EVENT
routes.delete("/events/:id", function (req, res) {

  try {
      Mydb.query(`DELETE FROM events WHERE id = '${req.params.id}'`);
      res.status(200).send("Delete")

  } catch (err) {
    console.log(err);
      res.status(400).send(err)

  }
});




//  PROFILE USER
routes.get("/user/:id", (req, res) => {
  try {
    if (!req.params.id) throw "NO USER";
    Mydb.query(
      `SELECT * FROM users WHERE users.id = ${req.params.id}`,
      function (err, result) {
        if (err) throw err;
        console.log(req.params.id);
        res.send(result);
        console.log(result);
      }
    );
  } catch (err) {
    res.send(403).send(err);
  }
});

routes.put("/profile/:id", function (req, res) {
  let profile = ` UPDATE users
    SET name = '${req.body.name}', email  = '${req.body.email}', 
    password = '${req.body.password}', photo = '${req.body.photo}'
    WHERE users.id = ${req.params.id}`;
  Mydb.query(profile, function (err, result) {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = routes;
