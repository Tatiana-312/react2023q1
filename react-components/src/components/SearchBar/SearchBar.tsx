import React, { useState } from 'react';
import classes from './SearchBar.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addSearchValue } from '../../redux/store/searchValueSlice';
import { rickAndMortyApi } from '../../redux/rickAndMortyApi';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const addValue = (currentValue: string) => dispatch(addSearchValue(currentValue));
  const searchValue = useAppSelector((state) => state.searchValue);
  const [inputValue, setInputValue] = useState(searchValue || '');

  const [trigger] = rickAndMortyApi.endpoints.getCharacters.useLazyQuery();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addValue(inputValue);
    await trigger(inputValue);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        data-testid="search-input"
        className={classes.input}
        type="text"
        value={inputValue}
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
