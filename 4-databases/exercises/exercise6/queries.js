"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = {
    createTable: "\n    CREATE TABLE IF NOT EXISTS \"products-1\" (\n        \"id\" SERIAL PRIMARY KEY,\n        \"name\" VARCHAR(100) NOT NULL,\n        \"price\" REAL NOT NULL\n    )",
};
