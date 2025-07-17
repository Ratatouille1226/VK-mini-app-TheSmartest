import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TypeState {
	type: 'easy' | 'medium' | 'hard' | '';
}

const initialState: TypeState = {
	type: '',
};

const typeQuiz = createSlice({
	name: 'type',
	initialState,
	reducers: {
		setType: (state, action: PayloadAction<'easy' | 'medium' | 'hard'>) => {
			state.type = action.payload;
		},
	},
});

export const { setType } = typeQuiz.actions;
export default typeQuiz.reducer;
