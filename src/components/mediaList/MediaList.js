/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import dummyData from '../../dummyData.json';
import movieGenre from '../../movieGenre.json';

import MediaCard from '../mediacard/MediaCard';

const MediaList = () => {
  const [media] = useState(dummyData.results);
  const [genres] = useState(movieGenre);

  const mediaGenres = media[0].genre_ids.map((c) =>
    genres.genres.find((p) => p.id === c),
  );

  console.log(mediaGenres, 'jere');
  return (
    <>
      <MediaCard media={media[0]} genres={mediaGenres} />
      <span>MediaList</span>
    </>
  );
};

export default MediaList;
