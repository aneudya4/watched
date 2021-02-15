import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaCard from '../mediacard/MediaCard';
import { initFetch } from '../../redux/actions/';
import { MediaContext, DispatchContext } from '../../appContext';
import './medialist.css';

const MediaList = React.memo(() => {
  const media = useContext(MediaContext);
  const { dispatch } = useContext(DispatchContext);

  const [mediaCategory, setMediaCategory] = useState('popular');

  const dispatched = useDispatch();
  const state = useSelector((state) => state);

  const getMediaGenres = (genreIds = []) =>
    genreIds.map((c) => media.genres.find((p) => p.id === c));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        dispatched(initFetch());
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
  }, [mediaCategory, dispatch, dispatched]);

  const onMediaSelect = async (category) => {
    setMediaCategory(category);
  };

  console.log(state, 'ested');
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
            In Theaters
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
            genres={getMediaGenres(mediaData.genre_ids)}
          />
        ))}
      </div>
    </section>
  );
});

export default MediaList;
