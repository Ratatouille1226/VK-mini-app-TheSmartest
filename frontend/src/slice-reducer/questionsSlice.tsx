import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../slice-fetch/fetchQuestions';

interface Question {
	title: string,
	variants: string[],
	correct: number,
}

interface QuestionsState {
	data: Question[],
	status: 'idle' | 'loading' | 'succeeded' | 'failed',
	error: string | null,
}

const initialState: QuestionsState = {
	data: [],
	status: 'idle',
	error: null,
}

const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
    resetQuestions: (state) => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
})

export const { resetQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
