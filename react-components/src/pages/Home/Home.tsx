import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import Title from '../../components/Title/Title';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-page">
        <Title {...{pageTitle: 'Book Shop'}}/>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
