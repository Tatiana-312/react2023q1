import React, { useContext, useEffect, useRef, useState } from 'react';
import { Data } from '../../pages/Home/data.interface';
import { HomePageContext } from '../../pages/Home/HomePageContext';
import classes from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const localStorageData = localStorage.getItem('value');

  const [searchValue, setSearchValue] = useState<string>(localStorageData || '');
  const { setApiCharacters } = useContext(HomePageContext);
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
    const url = value ? `${baseUrl}${endpoint}${query}${value}` : `${baseUrl}${endpoint}`;
    try {
      const response: Response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch {
      throw new Error('Could not fetch the data!');
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
