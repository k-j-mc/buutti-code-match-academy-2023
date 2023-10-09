import "dotenv/config";
import * as jwt from "jsonwebtoken";

const payload = { username: "sugarplumfairy" };
const secret = process.env.SECRET;
const options = { expiresIn: 60 * 15 };

const token = jwt.sign(payload, secret, options);
console.log(token);
