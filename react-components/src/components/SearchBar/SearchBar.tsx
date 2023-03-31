import React, { useEffect, useRef, useState } from 'react';
import { Data } from './data.interface';
import classes from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [apiCharacters, setApiCharacters] = useState<Data[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  const searchBarRef = useRef(searchValue);

  useEffect(() => {
    const localStorageData = localStorage.getItem('value');
    setSearchValue(localStorageData || '');

    return () => {
      localStorage.setItem('value', searchBarRef.current);
    };
  }, []);

  useEffect(() => {
    searchBarRef.current = searchValue;
  }, [searchValue]);

  const fetchData = async (query: string) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
      const data = await response.json();
      setApiCharacters(data.results);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchData(searchValue);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Type text here"
      />
      <button className={classes.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
