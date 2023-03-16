import PageTitle from '../../components/PageTitle/PageTitle';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { CurrentPageState } from './currentPageState.interface';

class NavBar extends React.Component<Record<string, never>, CurrentPageState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      currentPage: 'Home',
    };
  }

  onClick(currentPage: string) {
    this.setState({currentPage: currentPage})
  }

  render() {
    return (
      <>
        <ul className={classes.nav}>
          <li className={classes.home_link}>
            <NavLink
              data-testid="home-link"
              to="/"
              end
              className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
              onClick={() => this.onClick('Home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              data-testid="about-link"
              to="/about"
              className={({ isActive }) => (isActive ? `${classes.active}` : undefined)}
              onClick={() => this.onClick('About Us')}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <PageTitle {...this.state} />
      </>
    );
  }
}

export default NavBar;
