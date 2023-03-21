import { CardsData } from './cardsData.interface';

export interface FormProps {
  saveCard: (data: CardsData) => void;
}
