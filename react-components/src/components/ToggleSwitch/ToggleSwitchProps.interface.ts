import { Path, UseFormRegister } from 'react-hook-form';
import { FormFieldsData } from '../Form/formFieldsProps.interface';

interface NameProperty {
  payment: string;
}
export interface ToggleSwitchProps {
  title: string;
  firstOption: string;
  secondOption: string;
  name: Path<NameProperty>;
  register: UseFormRegister<FormFieldsData>;
  required: boolean;
  isErrors: boolean;
  errorText: string;
  testId: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
