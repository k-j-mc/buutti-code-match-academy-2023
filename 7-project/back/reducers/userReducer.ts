import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

const router = Router();

router.get("/", (request: Request, response: Response) => {
	response.send("USER ENDPOINT");
});

router.get("/:id", (request: Request, response: Response) => {
	const { id } = request.params;

	response.status(200).json({
		user: "example",
		id: id,
	});
});

router.post("/sign-in", (request: Request, response: Response) => {
	const { email, password } = request.body;

	response.status(200).json({
		email: email,
		password: "password",
	});
});

router.post("/sign-up", (request: Request, response: Response) => {
	const { email, password, userName, userPicture } = request.body;

	response.status(200).json({ ...request.body, message: "hello!" });
});

export default router;
