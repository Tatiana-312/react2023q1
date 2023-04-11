import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardData } from '../../components/Form/cardData.interface';

const formCardsDataSlice = createSlice({
  name: 'formCardsData',
  initialState: [],
  reducers: {
    addCardData: (state: CardData[], { payload }: PayloadAction<CardData>) => {
      state.push(payload);
    },
  },
});

export const { addCardData } = formCardsDataSlice.actions;

export default formCardsDataSlice.reducer;
