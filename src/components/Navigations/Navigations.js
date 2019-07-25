import React from 'react';
import { Link } from 'react-router-dom';

const navList = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
};

const navItems = {
  display: 'block',
  padding: '0 50px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: 12,
};

const Navigations = () => (
  <ul style={navList}>
    <li style={navItems}>
      <Link to="/">home</Link>
    </li>
    <li style={navItems}>
      <Link to="/about">about</Link>
    </li>
    <li style={navItems}>
      <Link to="/collections">collections</Link>
    </li>
  </ul>
);

export default Navigations;
