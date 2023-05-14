import React from 'react';

const AdBook = () => (
  <div className="adBook">
    <h2>ADD NEW BOOK</h2>
    <form className="bookForm">
      <input type="text" placeholder="Book Title" />
      <select key="author">
        <option value="Authors">Authors</option>
      </select>
      <button type="button">Add Book</button>
    </form>

  </div>
);

export default AdBook;
