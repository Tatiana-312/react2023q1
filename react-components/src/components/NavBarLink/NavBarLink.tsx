import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBarLink.module.css';
import { NavBarLinkProps } from './NavBarLinkProps.interface';

const NavBarLink: React.FC<NavBarLinkProps> = ({ testId, route, linkTitle }) => {
  return (
    <li className={classes.link}>
      <NavLink
        data-testid={testId}
        to={route}
        className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
      >
        {linkTitle}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
