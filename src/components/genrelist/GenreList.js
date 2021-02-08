import React, { useContext } from 'react';
import { MediaContext } from '../../appContext';
import GenreItem from '../genreitem/GenreItem';
import './genrelist.css';

const GenreList = ({ handleOnClick }) => {
  const { genres } = useContext(MediaContext);

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
