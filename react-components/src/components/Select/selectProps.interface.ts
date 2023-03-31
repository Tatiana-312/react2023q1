import { Path, UseFormRegister } from 'react-hook-form';
import { FormFields } from '../Form/formFieldsProps.interface';

interface NameProperty {
  country: string;
}
export interface SelectProps {
  id: string;
  label: string;
  name: Path<NameProperty>;
  optionValues: string[];
  register: UseFormRegister<FormFields>;
  validate: (value: string) => boolean;
  required: boolean;
  isErrors: boolean;
  errorText: string;
  testId: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}
