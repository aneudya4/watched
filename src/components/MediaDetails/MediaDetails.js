/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../spinner/Spinner';
import {
  WatchListContext,
  DispatchContext,
  MediaContext,
} from '../../appContext';
import MediaCard from '../mediacard/MediaCard';
// eslint-disable-next-line import/no-unresolved
import './mediadetails.css';

const MediaDetails = ({ match }) => {
  const [media, setMedia] = useState(null);
  const [cast, setCast] = useState(null);

  const { watchListDispatch, dispatch } = useContext(DispatchContext);
  const { movies, genres: allGenres } = useContext(MediaContext);

  const watchList = useContext(WatchListContext);

  const getMediaGenres = (genreIds = []) =>
    genreIds.map((c) => allGenres.find((p) => p.id === c));

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
  }, [match.params.mediaId]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const results = await fetch(
          `https://api.themoviedb.org/3/movie/${match.params.mediaId}/similar?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
        );
        const resultsJson = await results.json();
        dispatch({ type: 'MEDIA_FETCHING', payload: resultsJson.results });
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [match.params.mediaId]);

  const handleAdd = () => {
    const {
      id,
      title,
      release_date,
      runtime,
      status,
      poster_path,
      genres,
    } = media;
    const addedMedia = {
      id,
      title,
      release_date,
      runtime,
      status,
      poster_path,
      genres,
    };
    watchListDispatch({ type: 'ADD_MEDIA_TO_WATCHLIST', payload: addedMedia });
  };

  const handleremove = () => {
    watchListDispatch({
      type: 'REMOVE_MEDIA_FROM_WATCHLIST',
      payload: media.id,
    });
  };
  useEffect(() => {
    if (media) {
      const fetchMovieDetails = async () => {
        try {
          const results = await fetch(
            `https://api.themoviedb.org/3/movie/${media.id}/credits?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US`,
          );
          const resultsJson = await results.json();
          setCast(resultsJson.cast.filter((list, i) => i <= 10));
        } catch (error) {
          console.log(error);
        }
      };
      fetchMovieDetails();
    }
  }, [media]);
  if (!media) {
    return <Spinner />;
  }
  const beautifyCastList = (castList) => {
    const castArr = castList ? castList.map((list) => list.name) : [];
    return castArr.join(', ');
  };

  const renderButtons = () => {
    const isAdded = watchList.find((item) => item.id === media.id);
    if (!isAdded) {
      return (
        <button onClick={handleAdd} type="button" className="btn btn-add-wish">
          Add to Watch list
        </button>
      );
    }
    return (
      <button
        onClick={handleremove}
        type="button"
        className="btn btn-remove-wish">
        Remove from Watch list
      </button>
    );
  };

  return (
    <section className="media-data">
      <div className="media-details">
        <div className="media-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
            alt={media.title}
          />
          <span className="vote-avg">{media.vote_average}</span>
        </div>
        <div className="media-summary">
          <h3>{media.title}</h3>
          <div className="genres">
            {media.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <div className="release-info">
            <p className="tagline">{media.tagline}</p>
            <p className="release-date">{media.release_date.slice(0, 4)}</p>
            <p>{media.runtime} min</p>
          </div>

          <div className="overview">
            <h4>Sypnosis</h4>
            <p>{media.overview}</p>
          </div>
          <div className="cast-list">
            <h4>Cast</h4>
            <p>{beautifyCastList(cast)}.</p>
          </div>
          <div className="media-action-btns">{renderButtons()}</div>
        </div>
      </div>
      <div className="similar-media">
        <h3>Similar Media</h3>
        <div className="similar-media-list">
          {movies.map((mediaData) => (
            <MediaCard
              key={mediaData.id}
              media={mediaData}
              genres={getMediaGenres(mediaData.genre_ids)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaDetails;
