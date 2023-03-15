import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

class NavBar extends React.Component {
  render() {
    return (
      <ul className={classes.nav}>
        <li className={classes.home_link}>
          <NavLink
            data-testid="home-link"
            to="/"
            end
            className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            data-testid="about-link"
            to="/about"
            className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
          >
            About US
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
