import { CardsData } from './cardsData.interface';

export interface FormProps {
  saveCards: (data: CardsData) => void;
}
