import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

const router = Router();

router.get("/", (request: Request, response: Response) => {
	response.send("ADMIN ENDPOINT");
});

router.post("/sign-in", (request: Request, response: Response) => {
	const { email, password } = request.body;

	response.status(200).json({
		email: email,
		password: "password",
	});
});

export default router;
