import React from 'react';
import noResultsImg from '../images/no-results.svg';
import './noResults.css';

const NoResults = ({ message }) => {
  return (
    <section className="no-results">
      <span>
        {message} <i className="fas fa-box-open" />
      </span>

      <div className="no-results-img-container">
        <img src={noResultsImg} alt="no-resutls" />
      </div>
    </section>
  );
};

export default NoResults;
