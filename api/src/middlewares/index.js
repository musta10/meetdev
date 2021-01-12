const jwt = require('jsonwebtoken');
const config = require("../configDb");

module.exports = (req,res, next) =>{
    const authHeader = req.headers.authorizations;
    console.log(req.headers);
    const token = authHeader;
  
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
    //   console.log(test);
      res.status(403).send("no autorizado");
    }
}