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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middleware_1 = require("./middleware");
var jwt = require("jsonwebtoken");
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
var admin = process.env.ADMIN_NAME;
var verifyToken = function (token) {
    var secret = process.env.SECRET;
    var options = { expiresIn: 60 * 15 };
    var tokenScrub = token.substring(7, token.length);
    try {
        var verified = jwt.verify(tokenScrub, secret, options);
        return verified;
    }
    catch (error) {
        return null;
    }
};
router.get("/students", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var token, verifiedToken, idMap;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, middleware_1.logger)(request);
                token = request.headers.authorization;
                return [4 /*yield*/, verifyToken(token)];
            case 1:
                verifiedToken = _a.sent();
                if (verifiedToken) {
                    idMap = studentData.map(function (student) {
                        return student.id;
                    });
                    response.status(200).json(idMap);
                }
                else {
                    response.status(401).json({ error: "You must be logged in" });
                }
                return [2 /*return*/];
        }
    });
}); });
router.get("/student/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, token, verifiedToken, exist;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, middleware_1.logger)(request);
                id = request.params.id;
                token = request.headers.authorization;
                return [4 /*yield*/, verifyToken(token)];
            case 1:
                verifiedToken = _a.sent();
                if (verifiedToken) {
                    exist = studentData.filter(function (student) { return student.id.toString() === id; });
                    if (exist.length > 0) {
                        response.status(200).json(exist[0]);
                    }
                    else {
                        response
                            .status(400)
                            .json({ error: "No student found with this ID" });
                    }
                }
                else {
                    response.status(401).json({ error: "You must be logged in" });
                }
                return [2 /*return*/];
        }
    });
}); });
router.post("/student/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var body, id, userName, email, token, verifiedToken, exist;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, middleware_1.logger)(request);
                body = request.body;
                id = request.params.id;
                userName = request.body.name;
                email = request.body.email;
                token = request.headers.authorization;
                return [4 /*yield*/, verifyToken(token)];
            case 1:
                verifiedToken = _a.sent();
                if (verifiedToken) {
                    if (verifiedToken.username === admin) {
                        if (userName && email) {
                            exist = studentData.filter(function (student) { return student.id === id; });
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
                            response
                                .status(400)
                                .json({ error: "Missing name, id or email" });
                        }
                    }
                    else {
                        response
                            .status(400)
                            .json({ error: "Only admin can perform these tasks" });
                    }
                }
                else {
                    response.status(401).json({ error: "You must be logged in" });
                }
                return [2 /*return*/];
        }
    });
}); });
router.put("/student/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userName, email, token, verifiedToken, findByIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, middleware_1.logger)(request);
                id = request.params.id;
                userName = request.body.name;
                email = request.body.email;
                token = request.headers.authorization;
                return [4 /*yield*/, verifyToken(token)];
            case 1:
                verifiedToken = _a.sent();
                if (verifiedToken) {
                    if (verifiedToken.username === admin) {
                        findByIndex = studentData.findIndex(function (student) { return student.id === id; });
                        if (findByIndex >= 0) {
                            if (!email && !userName) {
                                response
                                    .status(400)
                                    .json({ error: "Missing email and name" });
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
                    }
                    else {
                        response
                            .status(400)
                            .json({ error: "Only admin can perform these tasks" });
                    }
                }
                else {
                    response.status(401).json({ error: "You must be logged in" });
                }
                return [2 /*return*/];
        }
    });
}); });
router.delete("/student/:id", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, token, verifiedToken, findByIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, middleware_1.logger)(request);
                id = request.params.id;
                token = request.headers.authorization;
                return [4 /*yield*/, verifyToken(token)];
            case 1:
                verifiedToken = _a.sent();
                if (verifiedToken) {
                    if (verifiedToken.username === admin) {
                        findByIndex = studentData.findIndex(function (student) { return student.id === id; });
                        if (findByIndex >= 0) {
                            studentData.splice(findByIndex, 1);
                            response.status(204).json([]);
                        }
                        else {
                            response.status(404).json({ error: "Student not found" });
                        }
                    }
                    else {
                        response
                            .status(400)
                            .json({ error: "Only admin can perform these tasks" });
                    }
                }
                else {
                    response.status(401).json({ error: "You must be logged in" });
                }
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
