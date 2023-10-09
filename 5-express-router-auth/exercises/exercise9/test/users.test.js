const request = require("supertest");
const app = require("../exercise9");

const api = request(app);

describe("Server", () => {
	it("Returns 404 on invalid address", async () => {
		const response = await api.get("/invalidaddress");
		expect(response.statusCode).toBe(404);
	});
	it("Returns 200 on valid address", async () => {
		const response = await api.get("/");
		expect(response.statusCode).toBe(200);
	});
	it("Registers with token new user with userName and password", async () => {
		const payload = {
			userName: "hello-test",
			password: "test-1-2-3",
		};

		const response = await api.post("/register").send(payload);

		const message = JSON.parse(response.text);

		expect(response.statusCode).toBe(201);
		expect(message.success).toEqual(
			"hello-test's account successfully created!"
		);
	});
	it("Logs user in with userName and password", async () => {
		const payload = {
			userName: "hello-test",
			password: "test-1-2-3",
		};

		const response = await api.post("/login").send(payload);

		const message = JSON.parse(response.text);

		expect(response.statusCode).toBe(200);
		expect(message.success).toEqual("hello-test is now logged in!");
	});
});
