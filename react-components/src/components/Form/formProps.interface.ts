import { CardsData } from './cardsData.interface';

export interface FormProps {
  uploadCard: (data: CardsData) => void;
}
