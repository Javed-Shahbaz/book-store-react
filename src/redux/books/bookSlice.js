import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  id: '',
  category: '',
  title: '',
  author: '',
  progres: '',
  currentChapter: '',
  chapterNumber: '',
};

const bokSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => ({
      books: state.filter((book) => book.id !== action.payload),
    }),
    addBook: (state, action) => ({
      books: [...state.books, action.payload],
    }),
  },
});

export const { removeBook, addBook } = bokSlice.actions;
export default bokSlice.reducer;
