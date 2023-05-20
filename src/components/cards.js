import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import { addBook } from '../redux/books/bookSlice';

const bookCard = ({ book }) => {
  const {addBook} = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const rendBooks = book.map((book) => (
    <>
      <div className="bookCont">
        <div className="title">
          <p>{ book.category }</p>
          <p>{ book.title }</p>
          <p>{ book.author }</p>
          <ul className="buttons">
            <li><button type="button">Comments</button></li>
            <li><button type="button"onClick={() => dispatch(removeBook(book.item_id))}>Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="bChart">
          <div>Chart</div>
          <div>
            <p>{ book.progres }</p>
            <p>COMPLETED</p>
          </div>
        </div>
        <div className="bookChap">
          <p>{ book.currentChapter }</p>
          <p>{ book.chapterNumber }</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </>
  ));
  return (
    <div className="main">
      { rendBooks }
    </div>
  );
};
export default bookCard;
