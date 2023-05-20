import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './cards';
import BookForm from './adbook';

const Book = () => {
  const { items } = useSelector((state) => state.book);
  return (
    <>
      {items.map((item) => (
  <BookCard title = {item.title} 
  author = {item.author} 
  category={item.category} key={item.id} id={item.id} />
))}
      {<BookForm />}
    </>
  )
};
export default Book;
