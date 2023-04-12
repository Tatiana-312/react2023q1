import React, { useState } from 'react';
import classes from './SearchBar.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addSearchValue } from '../../redux/store/searchValueSlice';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const addValue = (currentValue: string) => dispatch(addSearchValue(currentValue));
  const searchValue = useAppSelector((state) => state.searchValue);
  const [inputValue, setInputValue] = useState(searchValue || '');

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addValue(inputValue);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
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
