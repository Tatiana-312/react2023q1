import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface NameProperty {
  permission: string;
}
export interface CheckboxProps {
  testId: string;
  name: Path<NameProperty>;
  label: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  isErrors: boolean;
  errorText: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
