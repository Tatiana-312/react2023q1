import { UseFormRegister, Path, FieldValues, FieldValue, ValidationRule } from 'react-hook-form';
interface NameProperty {
  name: string;
  date: string;
  file: string;
}

export interface InputProps {
  testId: string;
  type: string;
  label: string;
  name: Path<NameProperty>;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  validate?: (value: FieldValue<FieldValues>) => boolean;
  isErrors: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  errorText: string;
}
