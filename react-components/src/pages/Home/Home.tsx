import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';

class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-page">
        <Title {...{ title: 'Book Shop' }} />
        <SearchBar />
        <CardList />
      </div>
    );
  }
}

export default Home;
