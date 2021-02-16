import React from 'react';
import { Link } from 'react-router-dom';
import placeHolderImg from '../images/placeholder.svg';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../../redux/actions';
import './watchlistcard.css';

const WatchListCard = ({ movie }) => {
  const dispatch = useDispatch();

  const setImg =
  movie.poster_path !== ' '
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : placeHolderImg;

  const onClickRemove = () => {
    dispatch(removeFromWatchlist(movie.movieId));
  };
  return (
    <div className="watch-list-card">
      <Link to={`/auth/dashboard/details/${movie.movieId}`}>
        <div className="watch-list-img">
          <img src={setImg} alt={movie.title} />
        </div>

        <div className="watch-list-details">
          <p>{movie.title}</p>
          <p>{movie.runtime} mins</p>
          <p>
            {movie.status}: <span>{movie.release_date.slice(0, 4)} </span>
          </p>
          <p>{movie.genres}</p>
        </div>
      </Link>
      <span className="icon" onClick={onClickRemove}>
        <i className="far fa-trash-alt" />
      </span>
    </div>
  );
};
export default WatchListCard;
