const express = require("express");
const routes = express.Router();
const Mydb = require("../database");
const bcrypt = require("bcrypt");
const config = require("../configDb");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const checkToken = require('../middlewares')

// CONEXION ADMIN
routes.post("/admin", (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    Mydb.query(
      `SELECT * FROM admin WHERE email = '${email}'`,
      function (err, result) {
        console.log(result);
        if (err) {
          throw err
        } else {
          if (result.length > 0) {
            bcrypt.compare(
              password,
              result[0].password,
              function (error, results) {
                console.log(results);
                if (results === true) {
                  let token = jwt.sign(
                    { email: result[0].email, id: result[0].id, isAdmin: true },
                    config.secret,
                    { expiresIn: 86400 }
                  );
                  console.log(token);
                  res.send({ token: token });
                  console.log("is admin");
                } else {
                  res.status(401).send('Le mot de passe entré est incorrect')
                  console.log("is not admin");
                }
              }
            );
          } else {
            res.status(403).send('Le Email entré est incorrect')
          }
        }
      }
    );
  });
  
  
  // AJOUTE EVENEMENT ADMIN
  routes.post("/addevent", checkToken, (req, res) => {
    const description = req.body.description;
    const date = req.body.date;
  
    Mydb.query(
      `INSERT INTO events (description, date) VALUES ('${description}','${date}')`,
      function (err, result) {
        console.log(result);
        if (err) {
          console.log(err);
        } else {
          // avec console.log res
          // metre variable envoye la var
          res.send("bien reçu")  // trouve id et  entre parentesis send id 
        }
      }
    );
  });

module.exports = routes;

