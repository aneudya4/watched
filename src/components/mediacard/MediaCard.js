/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import placeHolderImg from '../images/placeholder.svg';
// eslint-disable-next-line import/no-unresolved
import './mediacard.css';

const MediaCard = ({ media, genres }) => {
  const beautifyGenreList = (genreList) => {
    const genresArr = genreList[0] ? genreList.map((genre) => genre.name) : [];
    return genresArr.join(', ');
  };

  const setImg = media.poster_path
    ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
    : placeHolderImg;
  return (
    <div className="media-card">
      <Link to={`/auth/dashboard/details/${media.id}`}>
        <div className="media-img">
          <img loading="lazy" src={setImg} alt={media.title} />
        </div>
        <div className="media-info">
          <p className="title">{media.title}</p>
          <div className="genres">
            <p>{beautifyGenreList(genres)}.</p>
          </div>
          <span className="vote-avg">{media.vote_average}</span>
        </div>
      </Link>
    </div>
  );
};
export default MediaCard;
