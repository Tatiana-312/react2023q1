import React, { useEffect, useRef, useState } from 'react';
import classes from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

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

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
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
