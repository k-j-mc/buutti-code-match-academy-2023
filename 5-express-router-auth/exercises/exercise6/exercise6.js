"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var jwt = require("jsonwebtoken");
var payload = { username: "sugarplumfairy" };
var secret = process.env.SECRET;
var options = { expiresIn: 60 * 15 };
var token = jwt.sign(payload, secret, options);
console.log(token);
