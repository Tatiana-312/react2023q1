import { Data } from "../../pages/Home/data.interface";

export interface ModalProps {
  active: boolean;
  closeModal: () => void;
  modalData: Data;
}
