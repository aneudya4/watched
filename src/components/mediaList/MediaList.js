import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';
import MediaCard from '../mediacard/MediaCard';
import { fetchMoviesByCategory } from '../../redux/actions/';
import { getMediaGenres } from '../../helpers/genres';
import './medialist.css';

const MediaList = React.memo(() => {
  const [mediaCategory, setMediaCategory] = useState('popular');

  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state);

  const onMediaSelect = async (category) => {
    setMediaCategory(category);
    dispatch(await fetchMoviesByCategory(category));
  };

  if (loading.isLoading) {
    return <Spinner />;
  }

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
        {movies[movies.category].map((mediaData) => (
          <MediaCard
            key={mediaData.id}
            media={mediaData}
            genres={getMediaGenres(mediaData.genre_ids, movies)}
          />
        ))}
      </div>
    </section>
  );
});

export default MediaList;
