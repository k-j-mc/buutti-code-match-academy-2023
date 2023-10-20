import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

import Icons from "../Icons";

const NavigationMenu = () => {
	const navigate = useNavigate();

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
					mt: "50px",
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
				<MenuItem onClick={() => navigate("/")}>
					<Typography textAlign="center">Home</Typography>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default NavigationMenu;
