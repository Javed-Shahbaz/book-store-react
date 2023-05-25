import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/booksSlice';

const BookCard = () => {
  const { books, isLoading, isError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: try again</div>;
  }

  const renderBooks = books.map((book) => (
    <div key={book.item_id} className="bContainer">
      <div className="book-Title">
        <p className="category">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul className="buttonList">
          <li><button className="bookBtn" type="button">Comments</button></li>
          <li><button className="bookBtn" type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove</button></li>
          <li><button className="bookBtn" type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progres">
        <div className="chart">
          <div className="Prog-Bar">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="percentage">
          <h2>35%</h2>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <p className="currentChapter">currentChapter</p>
        <p>chapter4</p>
        <button className="updateProgress" type="button">Update Progress</button>
      </div>
    </div>
  ));

  return (
    <div className="mainContainer">
      {renderBooks}
    </div>
  );
};

export default BookCard;
