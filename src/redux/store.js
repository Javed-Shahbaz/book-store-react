import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice.js';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
