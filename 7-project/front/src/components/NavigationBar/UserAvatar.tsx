import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

import { Avatar, IconButton, Tooltip } from "@mui/material";

const UserAvatar = () => {
	const navigate = useNavigate();

	const { user } = useAppSelector((state) => state.user);

	const handleProfileNavigation = () => {
		navigate(`/profile/${user?.id}`);
	};

	return (
		<div style={{ marginLeft: "auto" }}>
			<Tooltip
				title="Profile"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					ml: 6,
				}}
			>
				<IconButton
					onClick={handleProfileNavigation}
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
		</div>
	);
};

export default UserAvatar;
