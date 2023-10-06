export const queries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "products" (
        "id" VARCHAR(100) NOT NULL,
        "name" VARCHAR(100) NOT NULL,
        "price" REAL NOT NULL
    )`,
	findAll: `SELECT * FROM "products"`,
	insertProduct: `INSERT INTO products (id, name, price) VALUES ($1, $2, $3)`,
	findOne: `SELECT * FROM "products" where id = $1`,
	deleteOne: `DELETE FROM "products" where id = $1`,
	updateOne: `UPDATE "products" SET name = $2, price = $3 WHERE id = $1`,
};
