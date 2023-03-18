import PageTitle from '../../components/PageTitle/PageTitle';
import React from 'react';
import classes from './NavBar.module.css';
import { CurrentPageState } from './currentPageState.interface';
import NavBarLink from '../../components/NavBarLink/NavBarLink';

class NavBar extends React.Component<Record<string, never>, CurrentPageState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      currentPage: 'Home',
    };
  }

  readonly navLinkData = [
    {
      testId: 'home-link',
      route: '/',
      page: 'Home',
      onClick: () => this.onClick('Home'),
    },
    {
      testId: 'about-link',
      route: '/about',
      page: 'About Us',
      onClick: () => this.onClick('About Us'),
    },
    {
      testId: 'form-link',
      route: '/form',
      page: 'Form',
      onClick: () => this.onClick('Form'),
    },
  ];

  onClick(currentPage: string) {
    this.setState({ currentPage: currentPage });
  }

  render() {
    return (
      <>
        <ul className={classes.nav}>
          {this.navLinkData.map((obj, index) => (
            <NavBarLink {...obj} key={index} />
          ))}
        </ul>
        <PageTitle {...this.state} />
      </>
    );
  }
}

export default NavBar;
