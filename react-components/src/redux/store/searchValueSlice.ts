import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: '',
  reducers: {
    addSearchValue: (_state, { payload }: PayloadAction<string>) => payload,
  },
});

export const { addSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
