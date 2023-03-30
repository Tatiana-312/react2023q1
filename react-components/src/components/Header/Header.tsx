import NavBar from '../NavBar/NavBar';
import React from 'react';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_navbar_container}>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
