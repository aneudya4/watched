/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react';
import { WatchListContext, DispatchContext } from '../../appContext';
import WatchListCard from '../wartchlistcard/WatchListCard';
// eslint-disable-next-line import/no-unresolved
import './watchlist.css';

const WatchList = () => {
  const watchList = useContext(WatchListContext);

  const [input, setInput] = useState('');

  const filteredList =
    watchList.length > 0
      ? watchList.filter((list) =>
          list.title.toLowerCase().includes(input.toLowerCase()),
        )
      : null;

  return (
    <section className="watch-list">
      <h2>WatchList</h2>

      {watchList.length > 0 ? (
        <label>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <i className="fas fa-search" />
        </label>
      ) : (
        'Nothing to show'
      )}
      {filteredList && filteredList.length === 0 && <p>Nothing to show</p>}
      {/* add componenet with message for emtpy list here */}

      {filteredList && (
        <div className="watch-list-collection">
          {filteredList.map((media) => (
            <WatchListCard key={media.movieId} media={media} />
          ))}
        </div>
      )}
    </section>
  );
};

export default WatchList;
