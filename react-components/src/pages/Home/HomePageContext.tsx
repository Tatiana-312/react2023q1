import React from 'react';
import { HomePageContextType } from './homePageContext.interface';

export const HomePageContext = React.createContext<HomePageContextType>({
  apiCharacters: [],
  setApiCharacters: () => {},
  setIsLoaded: () => {},
  setIsError: () => {},
});
