/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
// eslint-disable-next-line import/no-unresolved
import './mediadetails.css';

const MediaDetails = ({ match }) => {
  const [media, setMedia] = useState(null);
  const [cast, setCast] = useState(null);

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
  }, []);

  useEffect(() => {
    if (media) {
      const fetchMovieDetails = async () => {
        try {
          const results = await fetch(
            `https://api.themoviedb.org/3/movie/${media.id}/credits?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US`,
          );
          const resultsJson = await results.json();
          setCast(resultsJson.cast.filter((list, i) => i <= 10));
          // setMedia(resultsJson);
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
    const genresArr = castList ? castList.map((genre) => genre.name) : [];
    return genresArr.join(', ');
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
          <div className="media-action-btns">
            <button type="button" className="btn btn-add-wish">
              Wish list
            </button>
            <button type="button" className="btn btn-add-favorite">
              Favorite list
            </button>
            <button type="button" className="btn btn-remove-wish">
              Remove from wish list
            </button>
            <button type="button" className="btn btn-remove-favorite">
              Remove from favorite list
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaDetails;
