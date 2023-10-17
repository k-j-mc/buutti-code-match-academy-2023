import { IUser, IUserSignUp } from "../models/redux-models";
import { createSlice } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";

import userService from "../services/user";

const initialUserState: IUser = {
	user: [],
	loadingUser: true,
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
		console.log(user);
		dispatch(setUser(user));
	};
};

export default userSlice.reducer;
