import React, { useEffect } from 'react';
import placeHolderImg from '../images/placeholder.svg';
import NoResults from '../no-results/NoResults';
import Spinner from '../spinner/Spinner';
import MediaCard from '../mediacard/MediaCard';
import {
  fetchSimilarMovies,
  fetchMovieCast,
  fetchMovieDetails,
  removeFromWatchlist,
  addToWatchlist,
} from '../../redux/actions/';
import { useDispatch, useSelector } from 'react-redux';
import './mediadetails.css';

const MediaDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { movies, auth, watchlist, loading } = useSelector((state) => state);

  const getMediaGenres = (genreIds = []) =>
    genreIds.map((c) => movies.genres.find((p) => p.id === c));

  useEffect(() => {
    dispatch(fetchMovieDetails(match.params.mediaId));
    window.scrollTo(0, 0);
  }, [match.params.mediaId, dispatch]);

  useEffect(() => {
    dispatch(fetchSimilarMovies(match.params.mediaId));
  }, [match.params.mediaId, dispatch]);

  const handleAdd = () => {
    const {
      id,
      title,
      release_date,
      runtime,
      status,
      poster_path,
      genres,
    } = movies.movieDetails;

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

    dispatch(addToWatchlist(addedMedia));
  };

  const handleremove = () => {
    dispatch(removeFromWatchlist(movies.movieDetails.id));
  };
  useEffect(() => {
    if (movies.movieDetails) {
      dispatch(fetchMovieCast(movies.movieDetails.id));
    }
  }, [movies.movieDetails, dispatch]);
  if (!movies.movieDetails || loading.isLoading) {
    return <Spinner />;
  }
  const beautifyCastList = (castList) => {
    const castArr = castList ? castList.map((list) => list.name) : [];
    return castArr.join(', ');
  };

  const renderButtons = () => {
    const isAdded = watchlist.find(
      (item) => item.movieId === movies.movieDetails.id,
    );
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
  const setImg = movies.movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movies.movieDetails.poster_path}`
    : placeHolderImg;

  return (
    <section className="media-data">
      <div className="media-details">
        <div className="media-img">
          <img src={setImg} alt={movies.movieDetails.title} />
          <span className="vote-avg">{movies.movieDetails.vote_average}</span>
        </div>
        <div className="media-summary">
          <h3>{movies.movieDetails.title}</h3>
          <div className="genres">
            {movies.movieDetails.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <div className="release-info">
            <p className="tagline">{movies.movieDetails.tagline}</p>
            <p className="release-date">
              {movies.movieDetails.release_date.slice(0, 4)}
            </p>
            <p>{movies.movieDetails.runtime} min</p>
          </div>

          <div className="overview">
            <h4>Sypnosis</h4>
            <p>{movies.movieDetails.overview}.</p>
          </div>
          <div className="cast-list">
            <h4>Cast</h4>
            <p>{beautifyCastList(movies.movieCast)}.</p>
          </div>
          <div className="media-action-btns">{renderButtons()}</div>
        </div>
      </div>
      <div className="similar-media">
        <h3>Similar Movies</h3>

        {movies.similarMovies.length === 0 && (
          <NoResults message={'We could not find similar movies'} />
        )}

        <div className="similar-media-list">
          {movies.similarMovies.map((mediaData) => (
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
