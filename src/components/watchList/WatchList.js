import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';
import WatchListCard from '../wartchlistcard/WatchListCard';
import NoResults from '../no-results/NoResults';
import './watchlist.css';

const WatchList = () => {
  const { watchlist, loading, auth } = useSelector((state) => state);

  const [input, setInput] = useState('');

  const filteredList =
    watchlist.length > 0
      ? watchlist.filter((list) =>
          list.title.toLowerCase().includes(input.toLowerCase()),
        )
      : null;

  if (auth.user && loading.isLoading) {
    return <Spinner />;
  }

  return (
    <section className="watch-list">
      <h2>WatchList</h2>

      {watchlist.length > 0 ? (
        <label>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <i className="fas fa-search" />
        </label>
      ) : (
        <NoResults message={'You do not have movies added in the watchlist'} />
      )}
      {filteredList && filteredList.length === 0 && (
        <NoResults message={'We could not find movies matching your input'} />
      )}

      {filteredList && (
        <div className="watch-list-collection">
          {filteredList.map((movie) => (
            <WatchListCard key={movie.movieId} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default WatchList;
