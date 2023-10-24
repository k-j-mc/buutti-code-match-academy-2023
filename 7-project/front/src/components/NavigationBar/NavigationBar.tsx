import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

import Icons from "../Icons";

const NavigationBar = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
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

					<SearchBar />

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
	);
};

export default NavigationBar;
