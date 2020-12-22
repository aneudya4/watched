/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import './watchlistcard.css';

const WatchListCard = ({ media }) => {
  const beautifyGenreList = (genreList) => {
    const genresArr = genreList[0] ? genreList.map((genre) => genre.name) : [];
    return genresArr.join(', ');
  };
  return (
    <div className="watch-list-card">
      <Link to={`/auth/dashboard/details/${media.id}`}>
        <div className="watch-list-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
            alt="mmg"
          />
        </div>

        <div className="watch-list-details">
          <span className="icon">
            <i className="fas fa-check" />
          </span>
          <p>{media.title}</p>
          <p>{media.runtime} mins</p>
          <p>
            {media.status}: <span>{media.release_date.slice(0, 4)} </span>
          </p>
          <p>{beautifyGenreList(media.genres)}</p>
        </div>
      </Link>
    </div>
  );
};
export default WatchListCard;
