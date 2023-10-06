"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = {
    createTable: "\n    CREATE TABLE IF NOT EXISTS \"products\" (\n        \"id\" VARCHAR(100) NOT NULL,\n        \"name\" VARCHAR(100) NOT NULL,\n        \"price\" REAL NOT NULL\n    )",
    findAll: "SELECT * FROM \"products\"",
    insertProduct: "INSERT INTO products (id, name, price) VALUES ($1, $2, $3)",
    findOne: "SELECT * FROM \"products\" where id = $1",
    deleteOne: "DELETE FROM \"products\" where id = $1",
    updateOne: "UPDATE \"products\" SET name = $2, price = $3 WHERE id = $1",
};
