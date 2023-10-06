"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var studentRouter_1 = require("./studentRouter");
var middleware_js_1 = require("./middleware.js");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
var port = 5000;
app.listen(port, function () {
    console.log("Listening to port ".concat(port));
});
app.use("/", studentRouter_1.default);
app.get("/logger", function (request, response) {
    (0, middleware_js_1.logger)(request);
    response.status(200).json(middleware_js_1.logData);
});
app.use(middleware_js_1.unknownEndpoint);
app.use(middleware_js_1.logger);
