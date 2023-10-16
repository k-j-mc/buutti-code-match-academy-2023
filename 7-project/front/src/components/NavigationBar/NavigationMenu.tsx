import Icons from "../Icons";

import { IconButton } from "@mui/material";

const NavigationMenu = () => {
	return (
		<div>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="open drawer"
				sx={{ flexGrow: 0, mr: 2 }}
			>
				<Icons.Menu />
			</IconButton>
		</div>
	);
};

export default NavigationMenu;
