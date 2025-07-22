import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch(`http://localhost:3000/users`);
	return await response.json();
});
