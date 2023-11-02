import { Pool } from "pg";

const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env;

const pool = new Pool({
	host: PG_HOST,
	port: Number(PG_PORT),
	user: PG_USERNAME,
	password: String(PG_PASSWORD),
	database: PG_DATABASE,
});

export const executeQuery = async (query: string, parameters?: Array<any>) => {
	const clientPool = await pool.connect();
	try {
		const result = await clientPool.query(query, parameters);
		return result;
	} catch (error: any) {
		console.error(error.stack);
		error.name = "dbError";
		throw error;
	} finally {
		clientPool.release();
	}
};
