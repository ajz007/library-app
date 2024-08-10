import { createSlice } from '@reduxjs/toolkit';

const bookDetailsSlice = createSlice({
  name: 'bookDetails',
  initialState: {
    selectedBook: null,
  },
  reducers: {
    selectBook(state, action) {
      state.selectedBook = action.payload;
    },
  },
});

export const { selectBook } = bookDetailsSlice.actions;
export default bookDetailsSlice.reducer;
