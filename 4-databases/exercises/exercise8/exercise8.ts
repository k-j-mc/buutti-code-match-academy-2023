import dotenv from "dotenv";
import express from "express";
import { createProductsTable } from "./db";
import router from "./router";

dotenv.config();

const app = express();
app.use(express.json());

createProductsTable();

const { PORT } = process.env;

app.listen(PORT, () => {
	console.log("Products API listening to port", PORT);
});

app.use("/", router);
