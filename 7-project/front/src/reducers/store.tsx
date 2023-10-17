import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const store = configureStore({
	reducer: {
		movies: movieReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
