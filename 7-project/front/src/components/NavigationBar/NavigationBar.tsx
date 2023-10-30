import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

import NavigationMenu from "./NavigationMenu";
import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";
import UserAvatar from "./UserAvatar";

import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";

import Icons from "../Icons";

const NavigationBar = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<>
			<Box
				sx={{
					height: "60px",
					flexGrow: 1,
				}}
			>
				<AppBar
					position="static"
					style={{
						height: "60px",
						background: "#121212",
						boxShadow: "0px 5px 500px #99A8D6",
					}}
				>
					<Toolbar>
						<NavigationMenu />
						<h1 className="headerMenuLogo">MLiB</h1>

						<Grid container>
							<Grid
								item
								display={{ xs: "none", sm: "initial" }}
								style={{ width: "90%" }}
							>
								<SearchBarDesktop />
							</Grid>
							<Grid
								item
								display={{ xs: "initial", sm: "none" }}
								style={{ width: "100%" }}
							>
								<SearchBarMobile />
							</Grid>
						</Grid>

						{user ? (
							<UserAvatar />
						) : (
							<Link className="rrLink" to="../sign-in">
								<Button
									color="inherit"
									sx={{
										ml: 2,
										whiteSpace: "nowrap",
										padding: "10px",
									}}
									startIcon={<Icons.User />}
								>
									Sign in
								</Button>
							</Link>
						)}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default NavigationBar;
