import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";
import notificationReducer from "./notificationReducer";

const store = configureStore({
	reducer: {
		movies: movieReducer,
		reviews: reviewReducer,
		user: userReducer,
		notification: notificationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
