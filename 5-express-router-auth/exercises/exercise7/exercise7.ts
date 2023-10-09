import "dotenv/config";
import * as jwt from "jsonwebtoken";

const payload = { username: "SOMETHING HERE....." };
const secret = process.env.SECRET;
const options = { expiresIn: 60 * 15 };

const tokenTest =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNPTUVUSElORyBIRVJFLi4uLi4iLCJpYXQiOjE1MTYyMzkwMjJ9.T8zu8_dFv24jqa9dAa9hGGQfEbTf8dfjrhisSiXyV8Y";

try {
	const verified = jwt.verify(tokenTest, secret, options);
	if (verified.name === payload.username) {
		console.log("Success:");
		console.log(verified);
	}
} catch (error) {
	console.log("Token error");
}
