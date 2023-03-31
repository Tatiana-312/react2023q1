import { Data } from './data.interface';

export interface ApiDataContextType {
  apiCharacters: Data[];
  setApiCharacters: React.Dispatch<React.SetStateAction<Data[]>>;
}
