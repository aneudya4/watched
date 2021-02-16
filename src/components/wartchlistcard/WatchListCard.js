import React from 'react';
import { Link } from 'react-router-dom';
import placeHolderImg from '../images/placeholder.svg';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../../redux/actions';
import './watchlistcard.css';

const WatchListCard = ({ media }) => {
  const dispatch = useDispatch();

  const setImg =
    media.poster_path !== ' '
      ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
      : placeHolderImg;

  const onClickRemove = () => {
    dispatch(removeFromWatchlist(media.movieId));
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
