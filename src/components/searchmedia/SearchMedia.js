import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMoviesByGenres,
  setLoading,
  removeLoading,
  fetchMovieBySearchTerm,
} from '../../redux/actions';
import Spinner from '../spinner/Spinner';
import GenreListDropDown from '../genrelistdropdown/GenreListDropDown';
import GenreList from '../genrelist/GenreList';
import MediaCard from '../mediacard/MediaCard';
import './searchmedia.css';

const SearchMedia = () => {
  const dispatch = useDispatch();

  const { movies, loading } = useSelector((state) => state);

  const [searchTerm, setSearchTerm] = useState('');

  const getMediaGenres = (genreIds = []) =>
    genreIds.map((c) => movies.genres.find((p) => p.id === c));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovieBySearchTerm(searchTerm));
    setSearchTerm('');
  };

  const handleOnChange = async (genreName) => {
    dispatch(setLoading());
    const genre = await movies.genres.find((g) => g.name === genreName);
    dispatch(fetchMoviesByGenres(genre.id));
    dispatch(removeLoading());
  };

  const handleOnClickGenre = async (genreId) => {
    dispatch(fetchMoviesByGenres(genreId));
  };

  return (
    <section className="search-media">
      <GenreList handleOnClick={handleOnClickGenre} />

      <div className="search-section">
        <h1>Search</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <GenreListDropDown
          handleOnChange={handleOnChange}
          genres={movies.genres}
        />

        <div className="search-list">
          {loading.isLoading ? (
            <Spinner />
          ) : (
            movies[movies.category].map((mediaData) => (
              <MediaCard
                key={mediaData.id}
                media={mediaData}
                genres={getMediaGenres(mediaData.genre_ids)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchMedia;
