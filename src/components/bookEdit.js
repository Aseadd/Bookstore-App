import React from 'react';
import { useSelector } from 'react-redux';

function BookEdit() {
  return (
    <div className="container">
      <div className="book-edit">
        <div className="book-edit-title">
          <h1>EDIT BOOK</h1>
        </div>
        <div className="book-edit-form">
          <form>
            <input
              type="text"
              className="title"
              id="form-title"
              placeholder="Book title"
            />
            <input
              type="text"
              className="author"
              id="form-author"
              placeholder="Author"
            />
            <select name="category" id="form-category">
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Kids">Kids</option>

              <option value="Learning">Learning</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
