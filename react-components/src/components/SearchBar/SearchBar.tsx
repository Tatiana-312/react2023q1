import React, { useContext, useEffect, useRef, useState } from 'react';
import { Data } from '../../pages/Home/data.interface';
import { HomePageContext } from '../../pages/Home/HomePageContext';
import classes from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const localStorageData = localStorage.getItem('value');

  const [searchValue, setSearchValue] = useState<string>(localStorageData || '');
  const { setApiCharacters, setIsLoaded, setIsError } = useContext(HomePageContext);
  const searchBarRef = useRef(searchValue);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    getCharacters(searchValue);
    return () => {
      localStorage.setItem('value', searchBarRef.current);
    };
  }, []);

  useEffect(() => {
    searchBarRef.current = searchValue;
  }, [searchValue]);

  const getCharacters = async (value: string) => {
    try {
      const endpoint = '/character';
      const query = '/?name=';
      const characters: Data[] = await get(endpoint, query, value);
      setApiCharacters(characters);
    } catch (err) {
      console.log(err);
    }
  };

  const get = async (endpoint: string, query: string, value: string) => {
    const baseUrl = 'https://rickandmortyapi.com/api';
    const options = value ? `${query}${value}` : '';
    try {
      const response: Response = await fetch(`${baseUrl}${endpoint}${options}`);
    
      if (!response.ok) {
        setApiCharacters([]);
        setIsLoaded(true);
        setIsError(true);
        throw new Error();
      }
      const data = await response.json();
      setIsLoaded(true);
      setIsError(false);
      return data.results;
    } catch (error) {
      throw Error('Could not fetch the data!');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getCharacters(searchValue);
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
