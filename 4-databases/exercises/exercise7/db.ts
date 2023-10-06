import { Pool } from "pg";
import { v4 as uuidv4 } from "uuid";
import { queries } from "./queries";

const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env;

const pool = new Pool({
	host: PG_HOST,
	port: Number(PG_PORT),
	user: PG_USERNAME,
	password: String(PG_PASSWORD),
	database: PG_DATABASE,
});

interface ProductInterface {
	name: string;
	price: string;
}

export const executeQuery = async (query: string, parameters?: Array<any>) => {
	const client = await pool.connect();
	try {
		const result = await client.query(query, parameters);
		return result;
	} catch (error: any) {
		console.error(error.stack);
		error.name = "dbError";
		throw error;
	} finally {
		client.release();
	}
};

export const createProductsTable = async () => {
	await executeQuery(queries.createTable);
	console.log("Products table initialized");
};

export const findAll = async () => {
	console.log("Requesting all products");

	const result = await executeQuery(queries.findAll);
	console.log(`Found ${result.rows.length} products.`);

	return result.rows;
};

export const insertProduct = async (product: ProductInterface) => {
	const id = uuidv4();

	console.log("Creating new product");
	const params = [
		id,
		...Object.values({ name: product.name, price: product.price }),
	];

	const result = await executeQuery(queries.insertProduct, params);

	return result.rows;
};

export const findOne = async (id: string) => {
	const result = await executeQuery(queries.findOne, [id]);

	return result.rows;
};

export const deleteOne = async (id: string) => {
	const result = await executeQuery(queries.deleteOne, [id]);

	return result.rows;
};

export const updateOne = async (id: string, product: ProductInterface) => {
	const params = [
		id,
		...Object.values({ name: product.name, price: product.price }),
	];

	const result = await executeQuery(queries.updateOne, params);

	return result.rows;
};
