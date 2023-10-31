import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";

import { getMovieByName } from "../../reducers/movieReducer";

import NavigationMenu from "./NavigationMenu";
import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";
import UserAvatar from "./UserAvatar";

import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";

import Icons from "../Icons";

const NavigationBar = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

	const listRef = useRef<HTMLInputElement | null>(null);
	const searchRef = useRef<HTMLInputElement | null>(null);

	const [searchQuery, setSearchQuery] = useState<string>("");
	const [active, setActive] = useState<boolean>(false);

	const handleClickOutside = (event: any) => {
		if (listRef.current && !listRef.current.contains(event.target)) {
			setActive(false);
		}
	};

	useEffect(() => {
		const handleEsc = (event: any) => {
			if (event.key === "Escape") {
				setActive(false);
				setSearchQuery("");
			}
		};
		window.addEventListener("keydown", handleEsc);
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
			window.removeEventListener("keydown", handleEsc);
		};
	}, []);

	const handleSearch = (event: string) => {
		setSearchQuery(event);
		if (event.length > 0) {
			setActive(true);
		}
	};

	useEffect(() => {
		dispatch(getMovieByName(searchQuery));
	}, [searchQuery]);

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
								<SearchBarDesktop
									searchRef={searchRef}
									listRef={listRef}
									handleSearch={handleSearch}
									searchQuery={searchQuery}
									active={active}
								/>
							</Grid>
							<Grid
								item
								display={{ xs: "initial", sm: "none" }}
								style={{ width: "100%" }}
							>
								<SearchBarMobile
									searchRef={searchRef}
									listRef={listRef}
									handleSearch={handleSearch}
									searchQuery={searchQuery}
									setSearchQuery={setSearchQuery}
									active={active}
									setActive={setActive}
								/>
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
