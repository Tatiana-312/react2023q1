import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ModalState {
  id: number;
  active: boolean;
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    id: 0,
    active: false,
  },
  reducers: {
    openModal: (state: ModalState, { payload }: PayloadAction<number>) => {
      state.id = payload;
      state.active = true;
    },
    closeModal: (state: ModalState) => {
      state.active = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
