import NavBar from '../NavBar/NavBar';
import React from 'react';
import classes from './Header.module.css';
import PageTitle from '../PageTitle/PageTitle';
import { HeaderProps } from './headerProps.interface';

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  render() {
    return (
      <div className={classes.header}>
        <div className={classes.header_navbar_container}>
          <NavBar />
          <PageTitle {...this.props} />
        </div>
      </div>
    );
  }
}

export default Header;
