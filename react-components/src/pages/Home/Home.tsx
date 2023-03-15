import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import classes from './Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-page">
        <h2 className={classes.title}>Home page</h2>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
