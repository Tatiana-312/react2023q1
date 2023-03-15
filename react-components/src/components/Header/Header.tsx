import React from 'react';
import classes from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={classes.header}>
        <div className={classes.header_navbar_container}>navBar</div>
      </div>
    );
  }
}

export default Header;
