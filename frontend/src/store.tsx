import { configureStore } from '@reduxjs/toolkit';
import modalConfrirm from './slice-reducer/openModalSlice';
import typeQuizReducer from './slice-reducer/typeQuizSlice';

export const store = configureStore({
	reducer: {
		modal: modalConfrirm,
		type: typeQuizReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
