export interface HomePageContextType {
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (e: React.MouseEvent<HTMLElement>) => void;
}
