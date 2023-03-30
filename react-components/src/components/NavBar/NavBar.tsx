import React from 'react';
import classes from './NavBar.module.css';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import { useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navLinkData = [
    {
      testId: 'home-link',
      route: '/',
      linkTitle: 'Home',
    },
    {
      testId: 'about-link',
      route: 'about',
      linkTitle: 'About Us',
    },
    {
      testId: 'form-link',
      route: 'form',
      linkTitle: 'Form',
    },
  ];

  const pageRoute = useLocation().pathname.slice(1);

  return (
    <>
      <ul className={classes.nav}>
        {navLinkData.map((obj, index) => (
          <NavBarLink {...obj} key={index} />
        ))}
      </ul>
      <h1 className={classes.title}>{pageRoute ? pageRoute : 'Home'} page</h1>
    </>
  );
};

export default NavBar;
