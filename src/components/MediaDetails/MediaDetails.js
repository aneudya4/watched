/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import placeHolderImg from '../images/placeholder.svg';

import Spinner from '../spinner/Spinner';
import {
  WatchListContext,
  DispatchContext,
  MediaContext,
  AuthFormsContext,
} from '../../appContext';
import MediaCard from '../mediacard/MediaCard';
// eslint-disable-next-line import/no-unresolved
import config from '../config';
import './mediadetails.css';

const MediaDetails = ({ match }) => {
  const [media, setMedia] = useState(null);
  const [cast, setCast] = useState(null);
  const { auth } = useContext(AuthFormsContext);
  const { watchListDispatch, dispatch } = useContext(DispatchContext);
  const { similarMovies, genres: allGenres } = useContext(MediaContext);

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
    window.scrollTo(0, 0);
  }, [match.params.mediaId]);

  useEffect(() => {
    const fetchSimilarMedia = async () => {
      console.log('mmg');
      try {
        const results = await fetch(
          `https://api.themoviedb.org/3/movie/${match.params.mediaId}/similar?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
        );
        const resultsJson = await results.json();
        if (resultsJson.results.length > 0) {
          dispatch({
            type: 'SIMILAR_MEDIA_FETCHING',
            payload: resultsJson.results,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSimilarMedia();
  }, []);

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

    const genresList = genres.map((genre) => genre.name).join(', ');
    const addedMedia = {
      movieId: id,
      title,
      release_date,
      runtime: runtime === 0 ? 'Not Available' : runtime.toString(),
      status,
      poster_path: poster_path || ' ',
      genres: genresList,
      userId: auth.user.uid,
    };

    console.log(addedMedia, 'qui');
    watchListDispatch({
      type: 'ADD_MEDIA_TO_WATCHLIST',
      payload: addedMedia,
    });
    fetch(`${config.API_ENDPOINT}${auth.user.uid}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
      body: JSON.stringify(addedMedia),
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
      return res.json();
    });
  };

  const handleremove = () => {
    watchListDispatch({
      type: 'REMOVE_MEDIA_FROM_WATCHLIST',
      payload: media.id,
    });
    fetch(`${config.API_ENDPOINT}${media.id}/${auth.user.uid}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
      return;
    });
  };
  useEffect(() => {
    if (media) {
      const fetchCast = async () => {
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
      fetchCast();
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
    const isAdded = watchList.find((item) => item.movieId === media.id);
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
  const setImg = media.poster_path
    ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
    : placeHolderImg;

  console.log(media);
  return (
    <section className="media-data">
      <div className="media-details">
        <div className="media-img">
          <img src={setImg} alt={media.title} />
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
            <p>{media.overview}.</p>
          </div>
          <div className="cast-list">
            <h4>Cast</h4>
            <p>{beautifyCastList(cast)}.</p>
          </div>
          <div className="media-action-btns">{renderButtons()}</div>
        </div>
      </div>
      <div className="similar-media">
        <h3>Similar Movies</h3>
        <div className="similar-media-list">
          {similarMovies.length === 0 && (
            <p> We could not find similar movies</p>
          )}
          {similarMovies.map((mediaData) => (
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
