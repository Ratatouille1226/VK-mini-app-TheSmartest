import { configureStore } from '@reduxjs/toolkit';
import modalConfrirm from './slice-reducer/openModalSlice';
import typeQuizReducer from './slice-reducer/typeQuizSlice';
import questionsReducer from './slice-reducer/questionsSlice';

export const store = configureStore({
	reducer: {
		modal: modalConfrirm,
		type: typeQuizReducer,
		questions: questionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
