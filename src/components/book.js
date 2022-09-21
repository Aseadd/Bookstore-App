import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
// Progressbar module
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  removeBooksFromApi,
  randomCompletion,
  chapter,
} from '../redux/books/books';

const percentage = 66;

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBooksFromApi(id));
  };
  return (
    <section className="container">
      <div className="book">
        <div className="book-info">
          <span className="book-title">{title}</span>
          <span className="book-author">{author}</span>
          <div className="book-buttons">
            <button type="button" className="comment">
              Comment
            </button>
            <button type="button" className="remove" onClick={handleRemoveBook}>
              Remove
            </button>
            <button type="button" className="edit">
              Edit
            </button>
          </div>
        </div>
        <div className="progress">
          <div className="book-progress">
            <div
              className="book-progress"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <Example label="Animated Progress Provider">
                <CircularProgressbar
                  value={randomCompletion}
                  text={`${percentage}%`}
                />
              </Example>
            </div>
          </div>
          <div className="book-progress-info">
            <span className="book-progress-title">CURRENT CHAPTER</span>
            <span className="book-progress-chapter">
              &nbsp;
              {chapter()}
            </span>
            <button type="button" className="book-update">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
function Example(props) {
  const { label } = props;
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: '2px solid #ddd' }} />
      <div style={{ marginTop: 30, display: 'flex' }}>
        <div style={{ width: '30%', paddingRight: 30 }}> x</div>
        <div style={{ width: '70%' }}>
          <h3 className="h5">{label}</h3>
        </div>
      </div>
    </div>
  );
}

Example.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Book;
