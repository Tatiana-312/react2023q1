import { Data } from '../../pages/Home/data.interface';

export interface ModalProps {
  closeModal: () => void;
  modalData: Data;
}
