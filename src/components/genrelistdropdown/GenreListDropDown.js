import React from 'react';

const GenreListDropDown = ({ handleOnChange, genres }) => {
  return (
    <form className="form-dropdown">
      <select
        className="custom-select"
        onChange={(e) => handleOnChange(e.target.value)}>
        {genres.map((genre) => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>
    </form>
  );
};

export default GenreListDropDown;
