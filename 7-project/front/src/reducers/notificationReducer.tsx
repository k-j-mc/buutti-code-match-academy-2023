import { INotification } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

const initialState: INotification = {
	variant: undefined,
	message: "",
	timeOut: 0,
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		addNotification(state, action) {
			return action.payload;
		},
		removeNotification(state, action) {
			return initialState;
		},
	},
});

export const { addNotification, removeNotification } =
	notificationSlice.actions;

export const setNotification = (content: INotification) => {
	return async (dispatch: AppDispatch) => {
		dispatch(addNotification(content));

		let timeOut = 2000;

		if (content.timeOut && content.timeOut > 0) {
			timeOut = content.timeOut;
		}

		setTimeout(() => {
			dispatch(removeNotification(initialState));
		}, timeOut);
	};
};

export default notificationSlice.reducer;
