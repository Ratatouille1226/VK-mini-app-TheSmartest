import { createAsyncThunk } from '@reduxjs/toolkit';

export const setScoreUser = createAsyncThunk(
	'user/update',
	async (data: { id: string; score: number; type: 'easy' | 'medium' | 'hard' }, { getState }) => {
		const state = getState() as any;
		const users: any[] = state.user.list;
		const user = users.find((u) => u.id === data.id);

		if (!user) throw new Error('User not found');

		const quizFlagKey = `isEnd${data.type.charAt(0).toUpperCase() + data.type.slice(1)}Quiz`;

		const patchBody = {
			score: user.score + data.score,
			[quizFlagKey]: true,
		};

		const response = await fetch(`http://localhost:3000/users/${data.id}`, {
			method: 'PATCH',
			body: JSON.stringify(patchBody),
			headers: { 'Content-Type': 'application/json' },
		});
		return await response.json();
	},
);
