import { Router } from "express";
import {
	createProductsTable,
	findAll,
	insertProduct,
	findOne,
	deleteOne,
	updateOne,
} from "./db";

const router = Router();

router.get("/", async (request, response) => {
	const result = await findAll();

	response.status(200).json(result);
});

router.post("/", async (request, response) => {
	const body = request.body;

	const result = await insertProduct(body);

	response.status(200).json(result);
});

router.get("/:id", async (request, response) => {
	const id: string = request.params.id;

	const result = await findOne(id);

	response.status(200).json(result);
});

router.delete("/:id", async (request, response) => {
	const id: string = request.params.id;

	await deleteOne(id);

	response.status(200).json([]);
});

router.put("/:id", async (request, response) => {
	const id: string = request.params.id;
	const body = request.body;

	const result = await updateOne(id, body);

	response.status(200).json(result);
});

export default router;
