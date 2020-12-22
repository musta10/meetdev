const express = require('express');
const app = express();
const port = 4000

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors()) 
const routes = require('./routes/users')
app.use(routes)

app.listen(port, () => {
    console.log(`server in port ${port}`);
})
