import { CardData } from './cardData.interface';

export interface FormProps {
  saveCard: (data: CardData) => void;
}
