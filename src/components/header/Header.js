import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => <header>{children}</header>;
export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
