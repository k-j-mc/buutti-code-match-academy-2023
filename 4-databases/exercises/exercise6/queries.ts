export const queries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "products-1" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(100) NOT NULL,
        "price" REAL NOT NULL
    )`,
};
