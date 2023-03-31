import { Data } from '../../components/SearchBar/data.interface';

export interface ApiDataContextType {
  apiCharacters: Data[];
  setApiCharacters: React.Dispatch<React.SetStateAction<Data[]>>;
}
