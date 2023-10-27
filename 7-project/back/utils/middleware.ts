import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { findUser } from "../actions/user";

interface JwtPayload {
	email: string;
	id: string;
}

import { IUser } from "../reducers/userReducer";

declare module "express-serve-static-core" {
	interface Request {
		user?: IUser[];
		token?: string | null;
	}
	interface Response {
		user?: IUser[];
		token?: string | null;
	}
}

export const unknownEndpoint = (request: Request, response: Response) => {
	response.status(404).send({ error: "Unknown Endpoint" });
};

export const errorHandler = (
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (error.name === "CastError") {
		return response.status(400).send({ error: "malformatted id" });
	} else if (error.name === "ValidationError") {
		return response.status(400).json({ error: error.message });
	} else if (error.name === "JsonWebTokenError") {
		return response.status(400).json({ error: "token missing or invalid" });
	}

	next(error);
};

export const getTokenFrom = (request: Request) => {
	const authorizationAccess = request.get("authorization");
	if (
		authorizationAccess &&
		authorizationAccess.toLowerCase().startsWith("bearer ")
	) {
		return authorizationAccess.substring(7);
	}

	return null;
};

export const tokenExtractor = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	request.token = getTokenFrom(request);
	next();
};

export const userExtractor = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const secret: string = process.env.SECRET || "";

	const token = getTokenFrom(request);

	const tokenRefresh = request.cookies["refreshToken"];

	if (!token && !tokenRefresh) {
		return response.status(401).send("Access Denied. No token provided.");
	}

	if (token) {
		try {
			console.log("token used");
			const decodedToken = jwt.verify(token, secret) as JwtPayload;

			if (!decodedToken) {
				return response.status(401).json({ error: "token invalid" });
			}
			request.user = await findUser(decodedToken.email);
		} catch (error) {
			console.log("no token, cookie used");

			const decodedToken = jwt.verify(tokenRefresh, secret) as JwtPayload;

			if (!decodedToken) {
				return response.status(401).json({ error: "token invalid" });
			}
			request.user = await findUser(decodedToken.email);
		}
	}
	// if (!token) {

	next();
};
