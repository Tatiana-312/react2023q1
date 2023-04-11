import { createSlice } from '@reduxjs/toolkit';

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: '',
  reducers: {
    addSearchValue: (_state, action) => action.payload,
  },
});

export const { addSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
