import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import { Data } from './data.interface';
import { HomePageContext } from './HomePageContext';
import FetchDataError from '../../components/FetchDataError/FetchDataError';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

const Home: React.FC = () => {
  const [apiCharacters, setApiCharacters] = useState<Data[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Data>({});
  const [modalActive, setModalActive] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    const filteredData = apiCharacters.filter((character) => character.id === +e.currentTarget.id);
    setModalActive(true);
    setModalData(filteredData[0]);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <HomePageContext.Provider
      value={{ apiCharacters, setApiCharacters, setIsError, setIsLoaded, openModal }}
    >
      <div data-testid="home-page">
        <Title {...{ title: 'Rick and Morty' }} />
        <SearchBar />
        {!isLoaded ? <Loader /> : <CardList />}
        {isError && <FetchDataError />}
        <Modal modalData={modalData} active={modalActive} closeModal={closeModal} />
      </div>
    </HomePageContext.Provider>
  );
};

export default Home;
