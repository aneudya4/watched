import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => (
  <section className="about">
    <div className="app-details">
      <h3>
        Why binge is Awesome
        <span> . </span>
      </h3>
      <p>
        One app. Easy to use. Unlimited possibilities. Our goal is simple: BINGE
        combines the functions of a entertainment enciclopedia in combination
        with a todo list. BINGE has an extensive library of enterteiment for you
        to add to your list. To your surprise, our web app is for free. Register
        in our website now and become a part of our global community!
      </p>
      <Link to="/register">Register</Link>
    </div>
  </section>
);

export default About;
