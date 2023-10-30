import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

import { Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";

import Icons from "../Icons";

const NavigationMenu = () => {
	const navigate = useNavigate();

	const { user } = useAppSelector((state) => state.user);

	const [anchorElMenu, setAnchorElMenu] = useState(null);

	const handleOpenMenu = (event: any) => {
		setAnchorElMenu(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorElMenu(null);
	};

	return (
		<div>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="open drawer"
				sx={{ flexGrow: 0, mr: 2 }}
				onClick={handleOpenMenu}
			>
				<Icons.Menu />
			</IconButton>

			<Menu
				sx={{
					justifyContent: "flex-end",
					mr: 2,
					mt: "44px",
				}}
				id="menu-appbar"
				anchorEl={anchorElMenu}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElMenu)}
				onClose={handleCloseMenu}
			>
				<MenuItem
					sx={{
						minWidth: "300px",
					}}
					onClick={() => {
						navigate("/");
						handleCloseMenu();
					}}
				>
					<Typography textAlign="center">Home</Typography>
				</MenuItem>
				<Divider />
				{user && user.id ? (
					<MenuItem
						sx={{
							minWidth: "300px",
						}}
						onClick={() => {
							navigate(`/profile/${user.id}`);
							handleCloseMenu();
						}}
					>
						<Typography textAlign="center">Profile</Typography>
					</MenuItem>
				) : (
					<div>
						<MenuItem
							sx={{
								minWidth: "300px",
							}}
							onClick={() => {
								navigate(`/sign-in`);
								handleCloseMenu();
							}}
						>
							<Typography textAlign="center">Sign in</Typography>
						</MenuItem>
						<Divider />

						<MenuItem
							sx={{
								minWidth: "300px",
							}}
							onClick={() => {
								navigate(`/sign-up`);
								handleCloseMenu();
							}}
						>
							<Typography textAlign="center">Sign up</Typography>
						</MenuItem>
					</div>
				)}
			</Menu>
		</div>
	);
};

export default NavigationMenu;
