import { Link } from "react-router-dom";

import { useState } from "react";
import { Button, ButtonGroup, Grid, TextField } from "@mui/material";

const SignInPage = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const submitForm = (event: any) => {
		event.preventDefault();

		const payload = {
			email: email,
			password: password,
		};

		console.log(payload);

		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<Grid container spacing={1} style={{ height: "95vh" }}>
				<Grid item xs={2} />
				<Grid item xs={8}>
					<h2 className="headerPageInfo">Sign In:</h2>

					<form onSubmit={submitForm}>
						<TextField
							required
							fullWidth
							id="outlined-required-email"
							label="Email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							sx={{ mt: 4 }}
						/>

						<TextField
							required
							fullWidth
							id="outlined-required-password"
							label="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							sx={{ mt: 4 }}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 6 }}
						>
							Sign In
						</Button>
					</form>

					<div style={{ textAlign: "center" }}>
						<ButtonGroup
							variant="text"
							color="secondary"
							sx={{ mt: 6 }}
						>
							<Link className="rrLink" to="../password-reset">
								<Button>Forgot password?</Button>
							</Link>

							<Link className="rrLink" to="../sign-up">
								<Button>Don't have an account?</Button>
							</Link>
						</ButtonGroup>
					</div>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	);
};

export default SignInPage;
