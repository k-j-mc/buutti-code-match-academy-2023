"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var db_1 = require("./db");
var router_1 = require("./router");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.createProductsTable)();
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Products API listening to port", PORT);
});
app.use("/", router_1.default);
