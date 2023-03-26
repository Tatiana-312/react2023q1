import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBarLink.module.css';
import { NavBarLinkProps } from './NavBarLinkProps.interface';

class NavBarLink extends React.Component<NavBarLinkProps> {
  constructor(props: NavBarLinkProps) {
    super(props);
  }

  render() {
    return (
      <li className={classes.link}>
        <NavLink
          data-testid={this.props.testId}
          to={this.props.route}
          className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
        >
          {this.props.page}
        </NavLink>
      </li>
    );
  }
}

export default NavBarLink;
