import React from 'react';
import { useSelector } from 'react-redux';
import GenreItem from '../genreitem/GenreItem';
import './genrelist.css';

const GenreList = ({ handleOnClick }) => {
  const { genres } = useSelector((state) => state.movies);

  return (
    <aside className="genre-list">
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <GenreItem
            key={genre.id}
            handleOnClick={handleOnClick}
            genre={genre}
          />
        ))}
      </ul>
    </aside>
  );
};
export default GenreList;
