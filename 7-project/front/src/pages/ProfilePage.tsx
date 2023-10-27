import React from "react";
import { useAppSelector } from "../hooks/redux-hooks";

import {
	Divider,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
} from "@mui/material";

import Icons from "../components/Icons";

const ProfilePage = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<div className="backdropDetailsPage">
			<h2 className="headerPageInfoCenter">
				{user?.userFirstName}'s Profile
			</h2>
			<Grid container spacing={1} mt={4}>
				<Grid item xs={0.5} />
				<Grid item xs={11} sm={3}>
					<Paper
						elevation={6}
						style={{ backgroundColor: "rgb(9, 0, 23, 0.5)" }}
					>
						<List>
							<ListItemButton>
								<ListItemIcon>
									<Icons.List />
								</ListItemIcon>
								Watch List
							</ListItemButton>
							<Divider />
							<ListItemButton>
								<ListItemIcon>
									<Icons.Info />
								</ListItemIcon>
								User Info
							</ListItemButton>
							<Divider />
							<ListItemButton>
								<ListItemIcon>
									<Icons.SignOut />
								</ListItemIcon>
								Sign Out
							</ListItemButton>
						</List>
					</Paper>
				</Grid>
				<Grid item xs={0} sm={0}></Grid>
				<Grid item xs={0.5} />
			</Grid>
		</div>
	);
};

export default ProfilePage;
