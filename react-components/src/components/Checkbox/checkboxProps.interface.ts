import { Path, UseFormRegister } from 'react-hook-form';
import { FormFieldsData } from '../Form/formFieldsProps.interface';

interface NameProperty {
  permission: string;
}
export interface CheckboxProps {
  testId: string;
  name: Path<NameProperty>;
  label: string;
  register: UseFormRegister<FormFieldsData>;
  required: boolean;
  isErrors: boolean;
  errorText: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
