import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../../pages/Home/HomePageContext';
import classes from './SearchBar.module.css';
import { getCharacters } from '../../services/character.service';

const SearchBar: React.FC = () => {
  const localStorageData = localStorage.getItem('value');
  const [searchValue, setSearchValue] = useState<string>(localStorageData || '');
  const { setApiCharacters, setIsLoaded, setIsError } = useContext(HomePageContext);

  useEffect(() => {
    fetchData();
  }, []);

  const setSuccessState = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const setFailState = () => {
    setIsLoaded(true);
    setIsError(true);
  };

  const fetchData = async () => {
    try {
      const characters = await getCharacters(searchValue);
      setSuccessState();
      setApiCharacters(characters);
    } catch (err) {
      setFailState();
      setApiCharacters([]);
      console.log(err);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('value', searchValue);
    fetchData();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Type name here"
      />
      <button className={classes.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
