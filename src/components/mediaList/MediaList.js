/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import movieGenre from '../../movieGenre.json';
import dummyData from '../../dummyData.json';
import MediaCard from '../mediacard/MediaCard';
import './medialist.css';

const MediaList = () => {
  const [media] = useState(dummyData.results);
  const [genres] = useState(movieGenre);
  const getMEdiaGenres = (genreIds) =>
    genreIds.map((c) => genres.genres.find((p) => p.id === c));

  return (
    <section className="media-list">
      {media.map((mediaData) => (
        <MediaCard
          key={mediaData.id}
          media={mediaData}
          genres={getMEdiaGenres(mediaData.genre_ids)}
        />
      ))}
    </section>
  );
};

export default MediaList;
