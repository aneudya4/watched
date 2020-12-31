import React from 'react';
import './features.css';

const Features = () => (
  <section className="features">
    <div className="all-features">
      <h3>
        Features
        <span> . </span>
      </h3>
      <div className="features-container">
        <div className="feature">
          <span className="icon">
            <i className="fas fa-gift" />
          </span>
          <div className="features-details">
            <h4>Great Entertaiment Library</h4>
            <p>Our library includes tons of information about movies.</p>
          </div>
        </div>
        <div className="feature">
          <span className="icon">
            <i className="fas fa-list" />
          </span>
          <div className="features-details">
            <h4>Keep a record of your media</h4>
            <p>Combine the best content into one easy-to-use web app.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
