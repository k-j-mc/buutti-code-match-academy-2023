"use strict";
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
var argon2 = require("argon2");
var router = (0, express_1.Router)();
var userData = [
    {
        name: "Test User",
        id: 0,
        password: "$argon2id$v=19$m=65536,t=3,p=4$nNOwJNuBkgy78asdvs/OrGg$2rk9YErjaG7VkOGP93c8PU9CLE1bLiVHpKsNN/xmilw",
    },
    {
        name: "Test User 2",
        id: 2,
        password: "$argon2id$v=19$m=65536,t=3,p=4$nNOwJNuBkgy78gR+s/OrGsfbg$2rk9YErjaG7VkOGP93c8PU9CLE1bLiVHpKsNN/xmilw",
    },
    {
        name: "Test User 180",
        id: 180,
        password: "$argon2id$v=19$m=65536,t=3,p=4$nNOwJNuBkgy78gR+s/OrGg$2rk9YErjadG7VkOGP93c8PU9CLE1bLiVHpKsNN/xmilw",
    },
];
router.post("/", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var userName, password, newUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userName = request.body.userName;
                password = request.body.password;
                return [4 /*yield*/, argon2.hash(password).then(function (result) { return result; })];
            case 1:
                password = _a.sent();
                request.body.password = password;
                newUser = {
                    id: userData.length,
                    name: userName,
                    password: password,
                };
                userData.push(newUser);
                (0, middleware_1.logger)(request);
                response
                    .status(201)
                    .json({ success: "".concat(userName, "'s account successfully created!") });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
