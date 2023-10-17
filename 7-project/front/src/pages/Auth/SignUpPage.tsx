import { useEffect, useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { Link } from "react-router-dom";

import {
	Avatar,
	Button,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";

import { signUpUser } from "../../reducers/userReducer";

import Icons from "../../components/Icons";

type TPassCheck = {
	error: boolean;
	message: string;
};

const SignUpPage = () => {
	const dispatch = useAppDispatch();

	const [userPicture, setUserPicture] = useState<string | ArrayBuffer | null>(
		null
	);
	const [userFirstName, setUserFirstName] = useState<string>("");
	const [userLastName, setUserLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordConfirm, setPasswordConfirm] = useState<string>("");

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showPasswordConfirm, setShowPasswordConfirm] =
		useState<boolean>(false);

	const [passwordError, setPasswordError] = useState<TPassCheck>({
		error: false,
		message: "",
	});

	const onChangePicture = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (!files) {
			return;
		} else if (files && files[0]) {
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setUserPicture(reader.result);
			});
			reader.readAsDataURL(files[0]);
		}
	};

	const handleClickShowPasswordConfirm = () =>
		setShowPasswordConfirm((show) => !show);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	useEffect(() => {
		if (
			password.length === passwordConfirm.length &&
			password !== passwordConfirm
		) {
			setPasswordError({
				error: true,
				message: "Passwords do not match",
			});
		} else {
			setPasswordError({ error: false, message: "" });
		}
	}, [password, passwordConfirm]);

	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password && passwordConfirm) {
			if (!passwordError) {
				const payload = {
					userPicture: userPicture,
					userName:
						userFirstName[0].toUpperCase() +
						userLastName[0].toUpperCase(),
					userFistName: userFirstName,
					userLastName: userLastName,
					email: email,
					password: password,
				};
				dispatch(signUpUser(payload));

				setUserPicture(null);
				setUserFirstName("");
				setUserLastName("");
				setEmail("");
				setPassword("");
				setPasswordConfirm("");
			}
		}
	};

	return (
		<div>
			<Grid container spacing={1} style={{ height: "95vh" }}>
				<Grid item xs={2} />
				<Grid item xs={8}>
					<h2 className="headerPageInfo">New Account:</h2>

					<form onSubmit={submitForm}>
						<div className="userSignUpAvatarContainer">
							{userPicture !== null ? (
								<Avatar
									className="userSignUpAvatar"
									src={userPicture.toString()}
									alt="newUserAvatar"
								/>
							) : (
								<Avatar
									className="userSignUpAvatar"
									alt="newUserAvatar"
									sx={{ backgroundColor: "#00d4ff" }}
								>
									{userFirstName.length > 0 &&
										userFirstName[0].toUpperCase()}
									{userLastName.length > 0 &&
										userLastName[0].toUpperCase()}
								</Avatar>
							)}
						</div>

						<Button
							component="label"
							style={{
								display: "flex",
								justifyContent: "center",
								paddingTop: "10px",
							}}
						>
							Upload Avatar Image
							<input
								type="file"
								className="userAvatarPiture"
								onChange={onChangePicture}
								hidden
							/>
						</Button>

						<TextField
							required
							fullWidth
							id="outlined-required-firstName"
							label="First Name"
							value={userFirstName}
							onChange={({ target }) =>
								setUserFirstName(target.value)
							}
							sx={{ mt: 4 }}
						/>

						<TextField
							required
							fullWidth
							id="outlined-required-lastName"
							label="Last name"
							value={userLastName}
							onChange={({ target }) =>
								setUserLastName(target.value)
							}
							sx={{ mt: 4 }}
						/>

						<TextField
							required
							fullWidth
							id="outlined-required-email"
							type="email"
							label="Email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							sx={{ mt: 4 }}
						/>

						<FormControl
							variant="outlined"
							required
							fullWidth
							sx={{ mt: 4 }}
						>
							<TextField
								autoComplete="off"
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								value={password}
								error={passwordError.error}
								helperText={passwordError.message}
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

						<FormControl
							variant="outlined"
							required
							fullWidth
							sx={{ mt: 4 }}
						>
							<TextField
								autoComplete="off"
								id="outlined-adornment-passwordConfirm"
								type={showPasswordConfirm ? "text" : "password"}
								value={passwordConfirm}
								error={passwordError.error}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={
													handleClickShowPasswordConfirm
												}
												onMouseDown={
													handleMouseDownPassword
												}
												edge="end"
											>
												{showPasswordConfirm ? (
													<Icons.VisibilityOff />
												) : (
													<Icons.Visibility />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
								label="Confirm Password"
								onChange={({ target }) =>
									setPasswordConfirm(target.value)
								}
							/>
						</FormControl>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 6 }}
						>
							Create Account
						</Button>
					</form>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	);
};

export default SignUpPage;
