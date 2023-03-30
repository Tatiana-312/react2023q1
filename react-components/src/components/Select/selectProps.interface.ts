import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface NameProperty {
  country: string;
}
export interface SelectProps {
  id: string;
  label: string;
  name: Path<NameProperty>;
  optionValues: string[];
  register: UseFormRegister<FieldValues>;
  validate: (value: string) => boolean;
  required: boolean;
  isErrors: boolean;
  errorText: string;
  testId: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}
