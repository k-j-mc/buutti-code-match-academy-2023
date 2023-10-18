import { useState } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import {
	Avatar,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from "@mui/material";

const UserAvatar = () => {
	const { userPicture, userName } = useAppSelector(
		(state) => state.user.user
	);

	const pages = ["Products", "Pricing", "Blog"];
	const settings = ["Profile", "Account", "Dashboard", "Logout"];
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event: any) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: any) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<div style={{ marginLeft: "auto" }}>
			<Tooltip
				title="Open settings"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					ml: 6,
					mt: "45px",
				}}
			>
				<IconButton
					onClick={handleOpenUserMenu}
					sx={{
						justifyContent: "flex-end",
						ml: 3,
						mb: "5px",
					}}
				>
					{userPicture !== null ? (
						<Avatar
							className="userUpAvatar"
							sx={{ backgroundColor: "#00d4ff" }}
							alt={userName}
							src={userPicture}
						></Avatar>
					) : (
						<Avatar
							className="userUpAvatar"
							sx={{ backgroundColor: "#00d4ff" }}
							alt={userName}
							// src={userPicture
						>
							{userName}
						</Avatar>
					)}
				</IconButton>
			</Tooltip>

			<Menu
				sx={{
					justifyContent: "flex-end",
					mr: 2,
					// mt: "45px",
				}}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default UserAvatar;
