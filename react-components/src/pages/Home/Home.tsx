import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import { Data } from './data.interface';
import { HomePageContext } from './HomePageContext';

const Home: React.FC = () => {
  const [apiCharacters, setApiCharacters] = useState<Data[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <HomePageContext.Provider value={{ apiCharacters, setApiCharacters, setIsError, setIsLoaded }}>
      <div data-testid="home-page">
        <Title {...{ title: 'Rick and Morty' }} />
        <SearchBar />
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <CardList />
        )}
        {isError && <div>Error!</div>}
      </div>
    </HomePageContext.Provider>
  );
};

export default Home;
