import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import bookDetailsReducer from '../features/bookDetails/bookDetailsSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    bookDetails: bookDetailsReducer,
  },
});

export default store;
