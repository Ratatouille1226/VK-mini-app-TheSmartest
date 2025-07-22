import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setScoreUser } from '../slice-fetch/setScoreUser';
import { fetchUsers } from '../slice-fetch/fetchUsers';

interface User {
	id: string;
	score: number;
	name: string;
	isEndEasyQuiz: boolean;
	isEndMediumQuiz: boolean;
	isEndHardQuiz: boolean;
	url: string;
	img?: string;
}

interface UsersState {
	list: User[];
}

const initialState: UsersState = {
	list: [],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
			state.list = action.payload;
		});
		builder.addCase(setScoreUser.fulfilled, (state, action: PayloadAction<User>) => {
			const updatedUser = action.payload;
			const index = state.list.findIndex((u) => u.id === updatedUser.id);
			if (index !== -1) {
				state.list[index] = updatedUser;
			}
		});
	},
});

export default userSlice.reducer;
