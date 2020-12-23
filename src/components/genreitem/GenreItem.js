/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
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
