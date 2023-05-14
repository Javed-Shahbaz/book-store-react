import React from 'react';
import AdBook from './adbook';
import BookCard from './cards';

const Book = () => {
  const book = [{
    id: '1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progres: '64%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter17',
  },
  {
    id: '2',
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progres: '8%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter3: *A Lesson Learned*',
  },
  {
    id: '3',
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progres: '0%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Introduction',
  }];
  return (
    <div>
      <BookCard key={book.id} book={book} />
      <AdBook />
    </div>
  );
};
export default Book;
