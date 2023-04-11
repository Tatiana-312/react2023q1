import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import CardList from '../../components/CardList/CardList';
import FetchDataError from '../../components/FetchDataError/FetchDataError';
import Loader from '../../components/Loader/Loader';
// import Modal from '../../components/Modal/Modal';
import { getCharacterById } from '../../services/character.service';
import { useAppDispatch, useAppSelector } from '../../hook';
import { useGetCharacterByNameQuery } from '../../redux/rickAndMortyApi';

const Home: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const searchValue = useAppSelector((state) => state.searchValue);
  const dispatch = useAppDispatch();

  const { data, isLoading, isFetching, isError, refetch } = useGetCharacterByNameQuery(searchValue);

  const openModal = async (e: React.MouseEvent<HTMLElement>) => {
    const character = await getCharacterById(+e.currentTarget.id);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };
  const cardList = isFetching || isError ? null : <CardList />;
  return (
    <div data-testid="home-page">
      <Title {...{ title: 'Rick and Morty' }} />
      <SearchBar />
      {(isLoading || isFetching) && <Loader />}
      {isError && <FetchDataError />}
      {cardList}
      {/* {modalActive ? <Modal modalData={characterData} closeModal={closeModal} /> : null} */}
    </div>
  );
};

export default Home;
