const express = require("express");
const routes = express.Router();
const Mydb = require("../database");
const bcrypt = require("bcrypt");
const config = require("../configDb");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

// CONEXION ADMIN
routes.post("/dashboard", (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    Mydb.query(
      `SELECT * FROM admin WHERE email = '${req.body.email}'`,
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
                    { email: result[0].email, id: result[0].id, isAdmin: true },
                    config.secret,
                    { expiresIn: 86400 }
                  );
                  console.log(token);
                  res.send({ token: token });
                  console.log("you are admin");
                } else {
                  console.log("who are you");
                  console.log(results);
                }
              }
            );
          } else {
            console.log("faux mail");
          }
        }
      }
    );
  });
  
  // ADMIN TOKEN
  routes.use("/addEvent", (req, res, next) => {
    const authHeader = req.headers.authorizations;
    console.log(req.headers);
    const token = authHeader;
  
    if (token) {
      console.log(token);
      jwt.verify(token, config.secret, (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.status(403).send("oho");
        } else {
          console.log("test");
          next();
        }
      });
    } else {
      console.log("bonjour");
      res.status(403).send("oui");
    }
  });
  
  // AJOUTE EVENEMENT ADMIN
  routes.post("/addEvent", (req, res) => {
    const description = req.body.description;
    const date = req.body.date;
  
    Mydb.query(
      `INSERT INTO events (description, date) VALUES ('${description}','${date}')`,
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

module.exports = routes;

