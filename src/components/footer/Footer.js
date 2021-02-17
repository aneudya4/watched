import React from 'react';
import './footer.css';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <a
        href="https://github.com/aneudya4/"
        aria-label="Github"
        title="Github"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://twitter.com/AneudyA4"
        aria-label="Twitter"
        title="Twitter"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <p className="copyright">&copy;{year} Binge All Rights Reserved </p>
      <p>Developed by Aneudy Adames</p>
    </footer>
  );
};

export default Footer;
