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
		setUserInfo(state, action) {
			state.loadingUser = false;

			state.user = action.payload;
		},
	},
});

export const { setUserInfo } = userSlice.actions;

export const userInfo = () => {
	return async (dispatch: AppDispatch) => {
		const user = await userService.userDetails();

		dispatch(setUserInfo(user));
	};
};

export const signUpUser = (userPayload: IUserSignUp) => {
	return async (dispatch: AppDispatch) => {
		const user = await userService.registerUser(userPayload);
		dispatch(setUserInfo(user));
	};
};

export const signInUser = (userPayload: IUserSignIn) => {
	return async (dispatch: AppDispatch) => {
		await userService
			.signUserIn(userPayload)
			.then((response) => {
				dispatch(setUserInfo(response.data));
				dispatch(
					setNotification({
						message: `Welcome ${response.data.name}!`,
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

export const signOutUser = () => {
	return async (dispatch: AppDispatch) => {
		const user = await userService.userDetails();

		await userService
			.signUserOut()
			.then((response) =>
				dispatch(
					setNotification({
						message: `${user.userFirstName} successfully signed out!`,
						variant: "success",
						timeOut: 5000,
					})
				)
			)
			.catch((error) =>
				dispatch(
					setNotification({
						message: "Log out unsuccessful, please try again",
						variant: "error",
						timeOut: 0,
					})
				)
			);
		dispatch(setUserInfo(initialUserState.user));
	};
};

console.log(initialUserState.user);

export default userSlice.reducer;
