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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.deleteOne = exports.findOne = exports.insertProduct = exports.findAll = exports.createProductsTable = exports.executeQuery = void 0;
var pg_1 = require("pg");
var uuid_1 = require("uuid");
var queries_1 = require("./queries");
var _a = process.env, PG_HOST = _a.PG_HOST, PG_PORT = _a.PG_PORT, PG_USERNAME = _a.PG_USERNAME, PG_PASSWORD = _a.PG_PASSWORD, PG_DATABASE = _a.PG_DATABASE;
var pool = new pg_1.Pool({
    host: PG_HOST,
    port: Number(PG_PORT),
    user: PG_USERNAME,
    password: String(PG_PASSWORD),
    database: PG_DATABASE,
});
var executeQuery = function (query, parameters) { return __awaiter(void 0, void 0, void 0, function () {
    var client, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pool.connect()];
            case 1:
                client = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, 5, 6]);
                return [4 /*yield*/, client.query(query, parameters)];
            case 3:
                result = _a.sent();
                return [2 /*return*/, result];
            case 4:
                error_1 = _a.sent();
                console.error(error_1.stack);
                error_1.name = "dbError";
                throw error_1;
            case 5:
                client.release();
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.executeQuery = executeQuery;
var createProductsTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.executeQuery)(queries_1.queries.createTable)];
            case 1:
                _a.sent();
                console.log("Products table initialized");
                return [2 /*return*/];
        }
    });
}); };
exports.createProductsTable = createProductsTable;
var findAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Requesting all products");
                return [4 /*yield*/, (0, exports.executeQuery)(queries_1.queries.findAll)];
            case 1:
                result = _a.sent();
                console.log("Found ".concat(result.rows.length, " products."));
                return [2 /*return*/, result.rows];
        }
    });
}); };
exports.findAll = findAll;
var insertProduct = function (product) { return __awaiter(void 0, void 0, void 0, function () {
    var id, params, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = (0, uuid_1.v4)();
                console.log("Creating new product");
                params = __spreadArray([
                    id
                ], Object.values({ name: product.name, price: product.price }), true);
                return [4 /*yield*/, (0, exports.executeQuery)(queries_1.queries.insertProduct, params)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.rows];
        }
    });
}); };
exports.insertProduct = insertProduct;
var findOne = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.executeQuery)(queries_1.queries.findOne, [id])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.rows];
        }
    });
}); };
exports.findOne = findOne;
var deleteOne = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.executeQuery)(queries_1.queries.deleteOne, [id])];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.rows];
        }
    });
}); };
exports.deleteOne = deleteOne;
var updateOne = function (id, product) { return __awaiter(void 0, void 0, void 0, function () {
    var params, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = __spreadArray([
                    id
                ], Object.values({ name: product.name, price: product.price }), true);
                return [4 /*yield*/, (0, exports.executeQuery)(queries_1.queries.updateOne, params)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.rows];
        }
    });
}); };
exports.updateOne = updateOne;
