import { IUser, IUserSignUp, IUserSignIn } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import { setNotification } from "./notificationReducer";

import userService from "../services/user";

const initialUserState: IUser = {
	user: null,
	newUser: false,
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
		setNewUser(state, action) {
			state.newUser = action.payload;
			state.loadingUser = false;
		},
	},
});

export const { setUserInfo, setNewUser } = userSlice.actions;

export const userInfo = () => {
	return async (dispatch: AppDispatch) => {
		const user = await userService.userDetails();

		dispatch(setUserInfo(user));
	};
};

export const signUpUser = (userPayload: IUserSignUp) => {
	return async (dispatch: AppDispatch) => {
		await userService
			.registerUser(userPayload)
			.then((response) => {
				dispatch(
					setNotification({
						message: `Account successfully created!`,
						variant: "success",
						timeOut: 5000,
					})
				);
				dispatch(setNewUser(true));
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
		dispatch(setNewUser(false));
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
						message: `Welcome ${response.data.userFirstName}!`,
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
		await userService
			.signUserOut()
			.then((response) =>
				dispatch(
					setNotification({
						message: `Successfully signed out!`,
						variant: "success",
						timeOut: 5000,
					})
				)
			)
			.then((response) => userService.userDetails())
			.catch((error) =>
				dispatch(
					setNotification({
						message: "Log out unsuccessful, please try again",
						variant: "error",
						timeOut: 0,
					})
				)
			);
		dispatch(setUserInfo(null));
	};
};

export default userSlice.reducer;
