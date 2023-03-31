import { CardData } from '../../components/Form/cardData.interface';

export interface CardsContextType {
  cards: CardData[];
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
}
