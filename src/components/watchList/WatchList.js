/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { WatchListContext } from '../../appContext';
// eslint-disable-next-line import/no-unresolved
import './watchlist.css';

const WatchList = () => {
  const watchList = useContext(WatchListContext);

  console.log(watchList, 'este');
  return (
    <section className="watch-list">
      <h2>WatchList</h2>
      <input type="text" placeholder="Search" />

      <div className="watch-list-collection">
        <div className="watch-list-card">
          <div className="watch-list-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${watchList[0].poster_path}`}
              alt="mmg"
            />
          </div>
          <div className="watch-list-details">
            <span>
              <i className="fas fa-star" />
            </span>
            <p>{watchList[0].title}</p>
            <p>{watchList[0].release_date.slice(0, 4)}</p>
            <p>{watchList[0].runtime} mins</p>
            <p>{watchList[0].status}</p>
            <a href={watchList[0].homepage} rel="noreferrer" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchList;
