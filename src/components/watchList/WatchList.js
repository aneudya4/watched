/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react';
import { WatchListContext } from '../../appContext';
import WatchListCard from '../wartchlistcard/WatchListCard';
// eslint-disable-next-line import/no-unresolved
import './watchlist.css';

const WatchList = () => {
  const watchList = useContext(WatchListContext);
  const [input, setInput] = useState('');

  const filterList = watchList.filter((list) =>
    list.title.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <section className="watch-list">
      <h2>WatchList</h2>

      <label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <i className="fas fa-search" />
      </label>

      <div className="watch-list-collection">
        {filterList.map((media) => (
          <WatchListCard key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
};

export default WatchList;
