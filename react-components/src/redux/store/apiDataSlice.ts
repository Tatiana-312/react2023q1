import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    characters: [],
    character: {},
  },
  reducers: {
    addCharactersData: (state, action) => {
      state.characters = action.payload;
    },
    addCharacterData: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { addCharactersData, addCharacterData } = apiDataSlice.actions;

export default apiDataSlice.reducer;
