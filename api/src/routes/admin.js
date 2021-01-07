const express = require("express");
const routes = express.Router();
const Mydb = require("../database");
const bcrypt = require("bcrypt");
const config = require("../configDb");
const jwt = require("jsonwebtoken");
const saltRounds = 10;




