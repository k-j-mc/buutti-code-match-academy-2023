"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var jwt = require("jsonwebtoken");
var payload = { username: "SOMETHING HERE....." };
var secret = process.env.SECRET;
var options = { expiresIn: 60 * 15 };
var tokenTest = "eyJhbGciOiJIUzI1NiIsfInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNPTUVUSElORyBIRVJFLi4uLi4iLCJpYXQiOjE1MTYyMzkwMjJ9.T8zu8_dFv24jqa9dAa9hGGQfEbTf8dfjrhisSiXyV8Y";
try {
    var verified = jwt.verify(tokenTest, secret, options);
    if (verified.name === payload.username) {
        console.log("Success:");
        console.log(verified);
    }
}
catch (error) {
    console.log("Token error");
}
// if (verified.name === payload.username) {
// 	console.log("success");
// } else {
// 	console.log("error");
// }
