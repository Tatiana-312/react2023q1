import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface NameProperty {
  payment: string;
}
export interface ToggleSwitchProps {
  title: string;
  firstOption: string;
  secondOption: string;
  name: Path<NameProperty>;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  isErrors: boolean;
  errorText: string;
  testId: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
