/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React, { useState, useContext, useEffect } from 'react';

import MediaCard from '../mediacard/MediaCard';
import { MediaContext, DispatchContext } from '../../appContext';
import './medialist.css';

const MediaList = React.memo(() => {
  const media = useContext(MediaContext);
  const { dispatch } = useContext(DispatchContext);

  const [mediaCategory, setMediaCategory] = useState('popular');

  const getMEdiaGenres = (genreIds = []) =>
    genreIds.map((c) => media.genres.find((p) => p.id === c));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const results = await fetch(
          `https://api.themoviedb.org/3/movie/${mediaCategory}?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
        );
        const resultsJson = await results.json();
        dispatch({
          type: 'MEDIA_FETCHING',
          payload: resultsJson.results,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [mediaCategory]);

  const onMediaSelect = async (category) => {
    setMediaCategory(category);
  };
  console.log(media.genres);
  return (
    <section className="media-container">
      <div className="media-options">
        <ul>
          <li
            onClick={() => onMediaSelect('popular')}
            className={mediaCategory === 'popular' ? 'selected' : null}>
            Popular
          </li>
          <li
            className={mediaCategory === 'now_playing' ? 'selected' : null}
            onClick={() => onMediaSelect('now_playing')}>
            Now Playing
          </li>
          <li
            className={mediaCategory === 'top_rated' ? 'selected' : null}
            onClick={() => onMediaSelect('top_rated')}>
            Top Rated
          </li>
          <li
            className={mediaCategory === 'upcoming' ? 'selected' : null}
            onClick={() => onMediaSelect('upcoming')}>
            Upcoming
          </li>
        </ul>
      </div>
      <div className="media-list">
        {media.movies.map((mediaData) => (
          <MediaCard
            key={mediaData.id}
            media={mediaData}
            genres={getMEdiaGenres(mediaData.genre_ids)}
          />
        ))}
      </div>
    </section>
  );
});

export default MediaList;
