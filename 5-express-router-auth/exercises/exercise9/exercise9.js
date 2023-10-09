"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var studentRouter_1 = require("./studentRouter");
var userRouter_1 = require("./userRouter");
var middleware_js_1 = require("./middleware.js");
var app = express();
app.use(express.json());
app.use(express.static("public"));
dotenv.config();
var port = process.env.PORT;
app.listen(port, function () {
    console.log("Listening to port ".concat(port));
});
app.use("/", studentRouter_1.default);
app.use("/", userRouter_1.default);
app.get("/logger", function (request, response) {
    (0, middleware_js_1.logger)(request);
    response.status(200).json(middleware_js_1.logData);
});
app.use(middleware_js_1.unknownEndpoint);
app.use(middleware_js_1.logger);
module.exports = app;
