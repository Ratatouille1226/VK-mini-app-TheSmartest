import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async (type: 'easy' | 'medium' | 'hard') => {
	const response = await fetch(`http://localhost:3000/${type}Questions`);
	return await response.json();
});
