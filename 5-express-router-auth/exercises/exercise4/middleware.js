"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logData = exports.logger = exports.unknownEndpoint = void 0;
var moment = require("moment");
var logData = [];
exports.logData = logData;
var unknownEndpoint = function (request, response, next) {
    response.status(404).json({ error: "unknown end point" });
    next();
};
exports.unknownEndpoint = unknownEndpoint;
var logger = function (request) {
    var dateAccessed = moment().format("YYYY MMMM Do");
    var timeAccessed = moment().format("HH:mm:ss");
    var method = request.method;
    var url = request.originalUrl;
    var body = request.body;
    var id = request.params.id;
    var requestInfo = {
        id: logData.length,
        accessed: {
            time: timeAccessed,
            date: dateAccessed,
        },
        requestMethod: method,
        requestEndpoint: url,
        body: __assign(__assign({}, body), { id: id }),
    };
    logData.push(requestInfo);
};
exports.logger = logger;
