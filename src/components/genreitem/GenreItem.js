import React from 'react';

const GenreItem = ({ handleOnClick, genre }) => (
  <li
    onClick={() => {
      handleOnClick(genre.id);
    }}>
    <i className="fas fa-dot-circle" />
    {genre.name}
  </li>
);

export default GenreItem;
