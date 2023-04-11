import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HomePageContext } from '../../pages/Home/HomePageContext';
import classes from './SearchBar.module.css';
import { getCharacters } from '../../services/character.service';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addSearchValue } from '../../store/searchValueSlice';
import { addCharactersData } from '../../store/apiDataSlice';
import { Data } from '../../pages/Home/data.interface';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const addValue = (currentValue: string) => dispatch(addSearchValue(currentValue));
  const addCharacters = (characters: Data[]) => dispatch(addCharactersData(characters));
  const searchValue = useAppSelector((state) => state.searchValue);
  const [inputValue, setInputValue] = useState(searchValue || '');

  const { setIsLoaded, setIsError } = useContext(HomePageContext);

  const fetchData = async (value: string) => {
    try {
      setIsLoaded(false);
      const characters = await getCharacters(value);
      setSuccessState();
      addCharacters(characters);
    } catch (err) {
      setFailState();
      addCharacters([]);
    }
  };

  const useMount = (callback: () => void) => {
    const callbackReference = useRef(callback);

    useLayoutEffect(() => {
      callbackReference.current = callback;
    }, [callback]);

    useEffect(() => {
      callbackReference.current();
    }, []);
  };

  useMount(() => fetchData(searchValue));

  const setSuccessState = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const setFailState = () => {
    setIsLoaded(true);
    setIsError(true);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addValue(inputValue);
    fetchData(inputValue);
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
