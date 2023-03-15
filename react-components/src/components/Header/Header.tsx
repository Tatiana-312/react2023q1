import NavBar from '../NavBar/NavBar';
import React from 'react';
import classes from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <div className={classes.header_navbar_container}>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Header;
