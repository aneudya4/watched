/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './mediacard.css';

const MediaCard = ({ media, genres }) => (
  <div className="media-card">
    <div className="media-img">
      <img
        src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
        alt={media.title}
      />
    </div>
    <div className="media-info">
      <p className="title">{media.title}</p>
      <div className="genres">
        {genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>
    </div>
  </div>
);
export default MediaCard;
