import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../../pages/Home/HomePageContext';
import classes from './SearchBar.module.css';
import { getCharacters } from '../../services/character.service';

const SearchBar: React.FC = () => {
  const localStorageData = localStorage.getItem('value');

  const [searchValue, setSearchValue] = useState<string>(localStorageData || '');
  const { setApiCharacters, setIsLoaded, setIsError } = useContext(HomePageContext);
  const searchBarRef = useRef(searchValue);

  const setSuccessState = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const setFailState = () => {
    setIsLoaded(true);
    setIsError(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
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

    fetchData();
    return () => {
      localStorage.setItem('value', searchBarRef.current);
    };
  }, []);

  useEffect(() => {
    searchBarRef.current = searchValue;
  }, [searchValue]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
