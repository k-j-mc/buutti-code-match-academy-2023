import React from "react";

import { useAppSelector } from "../../hooks/redux-hooks";

import { Alert } from "@mui/material";

const NotificationBox = () => {
	const notification = useAppSelector((state) => state.notification);

	return (
		<div>
			{notification.message && (
				<Alert severity={notification.variant}>
					{notification.message}
				</Alert>
			)}
		</div>
	);
};

export default NotificationBox;