import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';
import GenreListDropDown from '../genrelistdropdown/GenreListDropDown';
import GenreList from '../genrelist/GenreList';
import { DispatchContext, MediaContext } from '../../appContext';
import MediaCard from '../mediacard/MediaCard';
import './searchmedia.css';

const SearchMedia = () => {
  const { dispatch } = useContext(DispatchContext);
  const media = useContext(MediaContext);
  const { movies, loading } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const getMediaGenres = (genreIds = []) =>
    genreIds.map((c) => media.genres.find((p) => p.id === c));

  const fetchSearch = async () => {
    try {
      if (searchTerm.trim() === '') {
        throw new Error('Input cant be empty');
      }
      const results = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
      );
      const resultsJson = await results.json();
      setSearchTerm('');
      dispatch({ type: 'SEARCH_MEDIA', payload: resultsJson.results });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
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
        <GenreListDropDown handleOnChange={handleOnChange} media={media} />

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
