import { useEffect, useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import {
	Button,
	ButtonGroup,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";

import { signInUser } from "../../reducers/userReducer";

import NotificationBox from "../../components/Notifications/NotificationBox";

import Icons from "../../components/Icons";

const SignInPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { user } = useAppSelector((state) => state.user);
	const { placement } = useAppSelector((state) => state.notification);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const submitForm = (event: any) => {
		event.preventDefault();

		const payload = {
			email: email,
			password: password,
		};

		dispatch(signInUser(payload));
	};

	useEffect(() => {
		if (user) {
			navigate("/");
			setEmail("");
			setPassword("");
		}
	}, [user]);

	return (
		<div>
			<Grid container spacing={1} style={{ height: "95vh" }}>
				<Grid item xs={2} />
				<Grid item xs={8}>
					<h2 className="headerPageInfo">Sign In:</h2>
					{placement === "signin" ||
						(placement === "signup" && <NotificationBox />)}
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

						<FormControl
							variant="outlined"
							fullWidth
							sx={{ mt: 4 }}
						>
							<TextField
								required
								autoComplete="off"
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								value={password}
								helperText=""
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													handleClickShowPassword
												}
												onMouseDown={
													handleMouseDownPassword
												}
												edge="end"
											>
												{showPassword ? (
													<Icons.VisibilityOff />
												) : (
													<Icons.Visibility />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
								label="Password"
								onChange={({ target }) =>
									setPassword(target.value)
								}
							/>
						</FormControl>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="secondary"
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
								<Button color="info">Forgot password?</Button>
							</Link>

							<Link className="rrLink" to="../sign-up">
								<Button color="info">
									Sign up for account
								</Button>
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
