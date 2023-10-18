import { IUser, IUserSignUp, IUserSignIn } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import { setNotification } from "./notificationReducer";

import userService from "../services/user";

const initialUserState: IUser = {
	user: {
		id: "",
		userName: "",
		email: "",
		password: "",
		userFirstName: "",
		userLastName: "",
		userPicture: "",
		token: "",
	},
	loadingUser: true,
	error: "",
};

const userSlice = createSlice({
	name: "users",
	initialState: initialUserState,
	reducers: {
		setUser(state, action) {
			state.loadingUser = false;

			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export const signUpUser = (userPayload: IUserSignUp) => {
	return async (dispatch: AppDispatch) => {
		const user = await userService.registerUser(userPayload);
		dispatch(setUser(user));
	};
};

export const signInUser = (userPayload: IUserSignIn) => {
	return async (dispatch: AppDispatch) => {
		await userService
			.signUserIn(userPayload)
			.then((response) => {
				dispatch(setUser(response.data));
				dispatch(
					setNotification({
						message: `Welcome!`,
						variant: "success",
						timeOut: 5000,
					})
				);
			})
			.catch((error) =>
				dispatch(
					setNotification({
						message: error.response.data.error,
						variant: "error",
						timeOut: 0,
					})
				)
			);
	};
};

export default userSlice.reducer;
