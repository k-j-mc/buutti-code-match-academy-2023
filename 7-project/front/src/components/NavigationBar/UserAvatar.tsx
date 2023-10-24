import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import { signOutUser } from "../../reducers/userReducer";

import {
	Avatar,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from "@mui/material";

const UserAvatar = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

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

	const handleSignOut = () => {
		dispatch(signOutUser());
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
					{user && (
						<>
							{user.userPicture ? (
								<Avatar
									className="userUpAvatar"
									sx={{ backgroundColor: "#00d4ff" }}
									alt={user.userName}
									src={user.userPicture}
								></Avatar>
							) : (
								<Avatar
									className="userUpAvatar"
									sx={{
										backgroundColor: "#00d4ff",
									}}
									alt={user.userName}
								>
									{user.userName}
								</Avatar>
							)}
						</>
					)}
				</IconButton>
			</Tooltip>

			<Menu
				sx={{
					justifyContent: "flex-end",
					mr: 2,
					mt: "50px",
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
				<MenuItem onClick={handleSignOut}>
					<Typography textAlign="center">Log out</Typography>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default UserAvatar;
