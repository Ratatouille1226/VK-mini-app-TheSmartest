import { configureStore } from '@reduxjs/toolkit';
import modalConfrirm from './slice-reducer/openModalSlice';
import typeQuizReducer from './slice-reducer/typeQuizSlice';
import questionsReducer from './slice-reducer/questionsSlice';
import userReducer from './slice-reducer/userSlice';

export const store = configureStore({
	reducer: {
		modal: modalConfrirm,
		type: typeQuizReducer,
		questions: questionsReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
