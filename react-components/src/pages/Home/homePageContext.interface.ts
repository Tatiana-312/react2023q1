import { Data } from './data.interface';

export interface HomePageContextType {
  apiCharacters: Data[];
  setApiCharacters: React.Dispatch<React.SetStateAction<Data[]>>;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (e: React.MouseEvent<HTMLElement>) => void;
}
