import { configureStore } from '@reduxjs/toolkit';
import modalConfrirm from './slice-reducer/openModalSlice';

export const store = configureStore({
	reducer: {
		modal: modalConfrirm,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
