import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';

const Home: React.FC = () => {
  return (
    <div data-testid="home-page">
      <Title {...{ title: 'Book Shop' }} />
      <SearchBar />
      <CardList />
    </div>
  );
};

export default Home;
