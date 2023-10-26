import { IUser, IUserSignUp, IUserSignIn } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import { setNotification } from "./notificationReducer";

import userService from "../services/user";
import watchListService from "../services/watchList";

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
		addToWatchList(state, action) {
			state.user?.watchList.push(action.payload);
			if (state.user) {
				userService.setLocalStorage(state.user);
			}
			state.loadingUser = false;
		},
		removeFromWatchList(state, action) {
			state.user = action.payload;

			if (state.user) {
				userService.setLocalStorage(action.payload);
			}

			state.loadingUser = false;
		},
	},
});

export const { setUserInfo, setNewUser, addToWatchList, removeFromWatchList } =
	userSlice.actions;

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

export const addWatchListItem = (payload: any) => {
	return async (dispatch: AppDispatch) => {
		const ids = {
			user_id: payload.user_id,
			movie_id: payload.movie.id,
		};

		const { id, ...obj } = payload.movie;

		await watchListService
			.insertToWatchList(ids)
			.then((response) => {
				const newWatchListItem = {
					...obj,
					...response,
				};

				dispatch(addToWatchList(newWatchListItem));
				dispatch(
					setNotification({
						message: `${obj.title} successfully added to Watch List!`,
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

export const removeWatchListItem = (
	movie_id: string,
	user_id: string,
	title: string
) => {
	return async (dispatch: AppDispatch) => {
		const loggedUserJSON = window.localStorage.getItem("signedInMLiBUser");

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);

			const newArray = user.watchList.filter(
				(obj: any) => obj.movie_id !== movie_id
			);

			const { watchList, ...obj } = user;

			const payload = { ...obj, watchList: newArray };

			await watchListService
				.removeWatchListItem(movie_id, user_id)
				.then((response) => {
					dispatch(removeFromWatchList(payload));
					dispatch(
						setNotification({
							message: `${title} successfully removed from Watch List!`,
							variant: "success",
							timeOut: 5000,
						})
					);
				})
				.catch((error) => {
					dispatch(
						setNotification({
							message: error.response.data.error,
							variant: "error",
							timeOut: 0,
						})
					);
				});
		}
	};
};

export default userSlice.reducer;
