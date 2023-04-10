import { createSlice } from '@reduxjs/toolkit';

const charactersDataSlice = createSlice({
  name: 'charactersData',
  initialState: [],
  reducers: {
    addCharactersData: (_state, action) => action.payload,
  },
});

export const { addCharactersData } = charactersDataSlice.actions;

export default charactersDataSlice.reducer;
