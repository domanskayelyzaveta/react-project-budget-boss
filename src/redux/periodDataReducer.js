import { createSlice } from '@reduxjs/toolkit';
import { requestPeriodData } from './thunks';

const initialState = {
  date: null,
  isLoading: false,
  error: null,
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(requestPeriodData.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(requestPeriodData.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.date = action.payload;
      })
      .addCase(requestPeriodData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const periodDataReducer = dateSlice.reducer;
