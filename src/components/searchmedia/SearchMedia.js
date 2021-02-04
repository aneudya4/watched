/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-unresolved */
import React, { useContext, useState } from 'react';
import Spinner from '../spinner/Spinner';
import GenreList from '../genrelist/GenreList';
import { DispatchContext, MediaContext } from '../../appContext';
import MediaCard from '../mediacard/MediaCard';
import './searchmedia.css';

const SearchMedia = () => {
  const { dispatch } = useContext(DispatchContext);
  const media = useContext(MediaContext);

  const [searchTerm, setSearchTerm] = useState('');

  const [selectedGenre, setSelectedGenre] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const getMediaGenres = (genreIds = []) =>
    genreIds.map((c) => media.genres.find((p) => p.id === c));

  const fetchSearch = async () => {
    try {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
      );
      const resultsJson = await results.json();
      setSearchTerm('');
      dispatch({ type: 'SEARCH_MEDIA', payload: resultsJson.results });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchSearch();
  };

  const fetchByGenre = async (genreId) => {
    try {
      const results = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`,
      );
      const resultsJson = await results.json();
      dispatch({ type: 'SEARCH_MEDIA', payload: resultsJson.results });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (genre) => {
    setIsLoading(true);
    const genreId = media.genres.find((g) => g.name === genre);
    fetchByGenre(genreId.id);
  };

  const handleOnClickGenre = (genreId) => {
    setIsLoading(true);
    fetchByGenre(genreId);
  };
  return (
    <section className="search-media">
      <GenreList handleOnClick={handleOnClickGenre} />

      <div className="search-section">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </form>

        <form className="form-dropdown">
          <select
            className="custom-select"
            onChange={(e) => handleOnChange(e.target.value)}>
            {media.genres.map((genre) => (
              <option key={genre.id}>{genre.name}</option>
            ))}
          </select>
        </form>

        <div className="search-list">
          {isLoading ? (
            <Spinner />
          ) : (
            media.movies.map((mediaData) => (
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
