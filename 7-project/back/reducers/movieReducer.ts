import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

const router = Router();

router.get("/", (request: Request, response: Response) => {
	response.send("MOVIES APP");
});

router.get("/movies", (request: Request, response: Response) => {
	response.status(200).json({
		id: "svlkndvlskdnvsjndvlksndlvioiiid",
		title: "movie name 1",
		length: "2 days",
	});
});

router.get("/movie", (request: Request, response: Response) => {
	response.status(200).json({
		id: "svlkndvlskdnvsjndvlksndlvioiiid",
		title: "movie name 1",
		length: "2 days",
	});
});

export default router;
