/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import placeHolderImg from '../images/placeholder.svg';
import { DispatchContext, AuthFormsContext } from '../../appContext';
import config from '../config';

import './watchlistcard.css';

const WatchListCard = ({ media }) => {
  const { watchListDispatch } = useContext(DispatchContext);
  const { auth } = useContext(AuthFormsContext);

  const setImg =
    media.poster_path !== ' '
      ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
      : placeHolderImg;

  const onClickRemove = () => {
    watchListDispatch({
      type: 'REMOVE_MEDIA_FROM_WATCHLIST',
      payload: media.movieId,
    });
    fetch(`${config.API_ENDPOINT}${media.movieId}/${auth.user.uid}`, {
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
  return (
    <div className="watch-list-card">
      <Link to={`/auth/dashboard/details/${media.movieId}`}>
        <div className="watch-list-img">
          <img src={setImg} alt={media.title} />
        </div>

        <div className="watch-list-details">
          <p>{media.title}</p>
          <p>{media.runtime} mins</p>
          <p>
            {media.status}: <span>{media.release_date.slice(0, 4)} </span>
          </p>
          <p>{media.genres}</p>
        </div>
      </Link>
      <span className="icon" onClick={onClickRemove}>
        <i className="far fa-trash-alt" />
      </span>
    </div>
  );
};
export default WatchListCard;
