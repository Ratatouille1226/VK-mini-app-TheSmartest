import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IUserPayload {
	id: string;
	name: string;
	url: string;
	img: string;
	score?: number;
	isEndEasyQuiz?: boolean;
	isEndMediumQuiz?: boolean;
	isEndHardQuiz?: boolean;
	hints?: number;
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch(`http://localhost:3000/users`);
	return await response.json();
});

export const postUsers = createAsyncThunk<IUserPayload, IUserPayload>('users/postUsers', async (data) => {
	const response = await fetch(`http://localhost:3000/users`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	});
	return await response.json();
});
