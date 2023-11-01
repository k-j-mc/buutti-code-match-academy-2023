import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";

import { getMovieById, getMovieVideos } from "../../reducers/movieReducer";
import { getMovieReviews } from "../../reducers/reviewReducer";

import { getMovieByName } from "../../reducers/movieReducer";

import NavigationMenu from "./NavigationMenu";
import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";
import UserAvatar from "./UserAvatar";

import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";

import Icons from "../Icons";

const NavigationBar = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

	const [searchQuery, setSearchQuery] = useState<string>("");

	const [active, setActive] = useState<boolean>(false);
	const [activeMobile, setActiveMobile] = useState<boolean>(false);

	const handleClose = () => {
		setActive(false);
		setSearchQuery("");
	};

	const handleSearch = (event: string) => {
		setSearchQuery(event);
		if (event.length > 0) {
			setActive(true);
		}
	};

	useEffect(() => {
		dispatch(getMovieByName(searchQuery));
	}, [searchQuery]);

	const handleNavigationClick = (movieId: string) => {
		dispatch(getMovieById(movieId));
		dispatch(getMovieVideos(movieId));
		dispatch(getMovieReviews(movieId));

		setActive(false);
		setActiveMobile(false);
		setSearchQuery("");

		navigate(`/movie/${movieId}`);
	};

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
									handleSearch={handleSearch}
									searchQuery={searchQuery}
									active={active}
									setActive={setActive}
									handleClose={handleClose}
									handleNavigationClick={
										handleNavigationClick
									}
								/>
							</Grid>
							<Grid
								item
								display={{ xs: "initial", sm: "none" }}
								style={{ width: "100%" }}
							>
								<SearchBarMobile
									handleSearch={handleSearch}
									searchQuery={searchQuery}
									setSearchQuery={setSearchQuery}
									activeMobile={activeMobile}
									setActiveMobile={setActiveMobile}
									handleNavigationClick={
										handleNavigationClick
									}
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
