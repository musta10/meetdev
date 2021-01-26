const jwt = require('jsonwebtoken');
const config = require("../configDb");

module.exports = (req,res, next) =>{
    const authHeader = req.headers.authorization;
    console.log(req.headers.authorization);
    console.log(req.headers);
    const token = authHeader;
    console.log(token);
    const autentication = token.split(' ');
    console.log(autentication[1]);
  
    if (token) {
      console.log(token);
      jwt.verify(token, config.secret, (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.status(403).send("no autorizado");
        } else {
          console.log("autorizado");
          next();
        }
      });
    } else {
      res.status(403).send("no autorizado");
    }
}