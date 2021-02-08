import React from 'react';
import noResultsImg from '../images/no-results.svg';
import './noResults.css';

const NoResults = ({ message }) => {
  return (
    <section>
      <p className="no-results">
        {message} <i className="fas fa-box-open" />
      </p>

      <div className="no-results-img-container">
        <img src={noResultsImg} alt="no-resutls" />
      </div>
    </section>
  );
};

export default NoResults;
