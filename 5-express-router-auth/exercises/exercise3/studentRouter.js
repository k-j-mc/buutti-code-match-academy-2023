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
var express_1 = require("express");
var middleware_1 = require("./middleware");
var router = (0, express_1.Router)();
var studentData = [
    {
        name: "Test User",
        id: "0",
        email: "test@test.test",
    },
    {
        name: "Test User 2",
        id: "2",
        email: "test222222222@test.test",
    },
    {
        name: "Test User 180",
        id: "180",
        email: "test180@test180.test",
    },
];
router.get("/students", function (request, response) {
    (0, middleware_1.logger)(request);
    var idMap = studentData.map(function (student) {
        return student.id;
    });
    response.status(200).json(idMap);
});
router.get("/student/:id", function (request, response) {
    (0, middleware_1.logger)(request);
    var id = request.params.id;
    var exist = studentData.filter(function (student) { return student.id.toString() === id; });
    if (exist.length > 0) {
        response.status(200).json(exist[0]);
    }
    else {
        response.status(400).json({ error: "No student found with this ID" });
    }
});
router.post("/student/:id", function (request, response) {
    (0, middleware_1.logger)(request);
    var body = request.body;
    var id = request.params.id;
    var userName = request.body.name;
    var email = request.body.email;
    if (userName && email) {
        var exist = studentData.filter(function (student) { return student.id === id; });
        if (exist.length === 0) {
            studentData.push(__assign(__assign({}, body), { id: id }));
            response.status(201).json([]);
        }
        else {
            response
                .status(400)
                .json({ error: "Student already exists with this ID" });
        }
    }
    else {
        response.status(400).json({ error: "Missing name, id or email" });
    }
});
router.put("/student/:id", function (request, response) {
    (0, middleware_1.logger)(request);
    var id = request.params.id;
    var userName = request.body.name;
    var email = request.body.email;
    var findByIndex = studentData.findIndex(function (student) { return student.id === id; });
    if (findByIndex >= 0) {
        if (!email && !userName) {
            response.status(400).json({ error: "Missing email and name" });
        }
        else {
            if (email) {
                studentData[findByIndex].email = email;
            }
            if (userName) {
                studentData[findByIndex].name = userName;
            }
            response.status(204).json([]);
        }
    }
    else {
        response.status(404).json({ error: "Student not found" });
    }
});
router.delete("/student/:id", function (request, response) {
    (0, middleware_1.logger)(request);
    var id = request.params.id;
    var findByIndex = studentData.findIndex(function (student) { return student.id === id; });
    if (findByIndex >= 0) {
        studentData.splice(findByIndex, 1);
        response.status(204).json([]);
    }
    else {
        response.status(404).json({ error: "Student not found" });
    }
});
exports.default = router;
