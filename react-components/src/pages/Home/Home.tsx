import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import FetchDataError from '../../components/FetchDataError/FetchDataError';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../hook';
import { useGetCharactersQuery } from '../../redux/rickAndMortyApi';

const Home: React.FC = () => {
  const modalActive = useAppSelector((state) => state.modal.active);
  const searchValue = useAppSelector((state) => state.searchValue);

  const { isLoading, isFetching, isError } = useGetCharactersQuery(searchValue);

  const cardList = isFetching || isError ? null : <CardList />;

  return (
    <div data-testid="home-page">
      <Title {...{ title: 'Rick and Morty' }} />
      <SearchBar />
      {(isLoading || isFetching) && <Loader />}
      {isError && <FetchDataError />}
      {cardList}
      {modalActive && <Modal />}
    </div>
  );
};

export default Home;
