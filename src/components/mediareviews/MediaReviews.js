/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MediaCard from '../mediacard/MediaCard';
import Spinner from '../spinner/Spinner';
import reviewsDummyData from '../../reviewsDummyData.json';
import './mediareviews.css';

const MediaReviews = ({ match }) => {
  const [media, setMedia] = useState(null);
  const [reviews, setReviews] = useState(reviewsDummyData);
  const [reviewInput, setReviewInput] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const results = await fetch(
          `https://api.themoviedb.org/3/movie/${match.params.mediaId}?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US`,
        );
        const resultsJson = await results.json();
        setMedia(resultsJson);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
    window.scrollTo(0, 0);
  }, [match.params.mediaId]);

  // TODO: FETCH ALL REVIEWS FROM BACKEND

  const onSubmit = (e) => {
    e.preventDefault();
    if (reviewInput.trim() !== '') {
      const date = new Date();
      const newReview = {
        id: date.getTime().toString(),
        email: 'yay@yay.com',
        body: reviewInput,
      };
      const allreviews = [newReview, ...reviews];
      setReviews(allreviews);
      setReviewInput('');
    }
  };

  if (!media) {
    return <Spinner />;
  }

  return (
    <section className="media-reviews">
      <div className="media">
        <MediaCard media={media} genres={media.genres} />
        <div className="review-box">
          <form onSubmit={onSubmit}>
            <textarea
              rows="5"
              cols="40"
              value={reviewInput}
              onChange={(e) => {
                setReviewInput(e.target.value);
              }}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="reviews">
        <h3>Latest Reviews</h3>
        {reviews.map((review) => {
          return (
            <div key={review.id} className="review">
              <span>{review.email}</span>
              <span>{new Date(Date.now()).toLocaleString().split(',')[0]}</span>
              <p>{review.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MediaReviews;
