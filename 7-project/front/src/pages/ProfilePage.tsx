import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";

import { signOutUser } from "../reducers/userReducer";

import {
	Divider,
	Grid,
	List,
	ListItemButton,
	ListItemIcon,
	Paper,
} from "@mui/material";

import Notification from "../components/Notifications/NotificationBox";

import WatchList from "../components/Profile/WatchList";

import Icons from "../components/Icons";

const ProfilePage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.user);

	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleSignOut = () => {
		dispatch(signOutUser());
		navigate("/");
	};

	const handleListItemClick = (
		event: MouseEvent<HTMLDivElement>,
		index: number
	) => {
		setSelectedIndex(index);

		if (index === 2) {
			handleSignOut();
		}
	};

	return (
		<div className="backdropDetailsPage">
			<div className="absoluteNotification">
				<Notification />
			</div>
			<h2 className="headerPageInfoCenter">
				{user?.userFirstName}'s Profile
			</h2>
			<Grid container spacing={1} mt={4}>
				<Grid item xs={0.5} />

				<Grid item xs={11} sm={3}>
					<Paper
						elevation={6}
						style={{ backgroundColor: "rgb(9, 0, 23, 1)" }}
					>
						<List>
							<ListItemButton
								selected={selectedIndex === 0}
								onClick={(event) =>
									handleListItemClick(event, 0)
								}
							>
								<ListItemIcon>
									<Icons.List />
								</ListItemIcon>
								Watch List
							</ListItemButton>
							<Divider />
							<ListItemButton
								selected={selectedIndex === 1}
								onClick={(event) =>
									handleListItemClick(event, 1)
								}
							>
								<ListItemIcon>
									<Icons.Info />
								</ListItemIcon>
								User Info
							</ListItemButton>
							<Divider />
							<ListItemButton
								selected={selectedIndex === 2}
								onClick={(event) =>
									handleListItemClick(event, 2)
								}
							>
								<ListItemIcon>
									<Icons.SignOut />
								</ListItemIcon>
								Sign Out
							</ListItemButton>
						</List>
					</Paper>
				</Grid>
				<Grid
					item
					xs={0}
					sm={8}
					margin={{ xs: "4.166666666666666%", sm: 0 }}
				>
					{selectedIndex === 0 ? <WatchList /> : <></>}
				</Grid>
				<Grid item xs={0.5} />
			</Grid>
		</div>
	);
};

export default ProfilePage;
