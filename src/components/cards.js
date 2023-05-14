import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Proptypes from 'prop-types';

const bookCard = ({ book }) => {
  const rendBooks = book.map((book) => (
    <>
      <div className="bookCont">
        <div className="title">
          <p>{ book.category }</p>
          <p>{ book.title }</p>
          <p>{ book.author }</p>
          <ul className="buttons">
            <li><button type="button">Comments</button></li>
            <li><button type="button">Remove</button></li>
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

bookCard.propTypes = {
  book: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default bookCard;
