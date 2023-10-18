export const userQueries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "users" (
        "id" VARCHAR(100) NOT NULL,
        "email" VARCHAR(100) NOT NULL,
        "password" VARCHAR(100) NOT NULL,
        "userName" VARCHAR(100) NOT NULL,
        "userFirstName" VARCHAR(100) NOT NULL,
        "userLastName" VARCHAR(100) NOT NULL
    )`,
	findAll: `SELECT * FROM "users"`,
	insertUser: `INSERT INTO "users" ("id", "email", "password", "userName", "userFirstName", "userLastName") VALUES ($1, $2, $3, $4, $5, $6)`,
	findOne: `SELECT * FROM "users" where email = $1`,
	deleteOne: `DELETE FROM "users" where "id" = $1`,
	updatePassword: `UPDATE "users" SET "password" = $2, WHERE "id" = $1`,
};
