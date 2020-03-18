// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import NotFound from '../../pages/NotFound';
// Styles
import styles from './ReviewList.module.css';

const ReviewsList = ({ reviews }) => (
  <>
    {reviews.length > 0 && (
      <ul className={styles.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li className={styles.reviewsListItem} key={id}>
            <p>{content}</p>
            <h3>
              <span>Author:</span> {author}
            </h3>
          </li>
        ))}
      </ul>
    )}
    {reviews.length === 0 && (
      <NotFound message="We don't have any reviews for this movie." />
    )}
  </>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
