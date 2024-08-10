import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    searchStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchSuccess(state, action) {
      state.loading = false;
      state.results = action.payload;
    },
    searchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { searchStart, searchSuccess, searchFailure } = searchSlice.actions;
export default searchSlice.reducer;
