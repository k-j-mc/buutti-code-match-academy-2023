import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

const App = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onSubmit = (event: any) => {
		event.preventDefault();

		alert(`Welcome ${email} password will not be revealed in this window!`);

		resetInfo();
	};

	const resetInfo = () => {
		setEmail("");
		setPassword("");
	};

	return (
		<Container className="pt-5">
			<Row>
				<Form onSubmit={onSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							size="lg"
							autoComplete="on"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							size="lg"
							autoComplete="on"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicCheckbox1">
						<Form.Check
							type="checkbox"
							label="Keep me signed in"
							id="1"
						/>
						<Form.Check type="radio" label="Hello" id="2" />

						<Form.Check
							disabled
							type="radio"
							label="Goodbye"
							id="3"
						/>
					</Form.Group>

					<div className="d-grid gap-2">
						<Button variant="primary" type="submit" size="lg">
							Submit
						</Button>
						<Button
							variant="outline-primary"
							size="lg"
							onClick={resetInfo}
						>
							Reset
						</Button>
					</div>
				</Form>
			</Row>
		</Container>
	);
};

export default App;
