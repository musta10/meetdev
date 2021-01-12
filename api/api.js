const express = require('express');
const app = express();
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// CORS MIDDLEWARE
app.use(cors()) 
const routes = require('./src/routes/users')
const admin = require('./src/routes/admin')
app.use(routes)
app.use(admin)



app.listen(port, () => {
    console.log(`server in port ${port}`);
})
