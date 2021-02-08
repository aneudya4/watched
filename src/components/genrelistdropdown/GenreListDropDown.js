import React from 'react';

const GenreListDropDown = ({ handleOnChange, media }) => {
  return (
    <form className="form-dropdown">
      <select
        className="custom-select"
        onChange={(e) => handleOnChange(e.target.value)}>
        {media.genres.map((genre) => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>
    </form>
  );
};

export default GenreListDropDown;
