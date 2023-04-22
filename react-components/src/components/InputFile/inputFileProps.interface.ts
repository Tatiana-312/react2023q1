import { UseFormRegister, Path, FieldValues, FieldValue, ValidationRule } from 'react-hook-form';
import { FormFieldsData } from '../Form/formFieldsProps.interface';
interface NameProperty {
  file: string;
}

export interface InputFileProps {
  testId: string;
  type: string;
  label: string;
  name: Path<NameProperty>;
  register: UseFormRegister<FormFieldsData>;
  required: boolean;
  validate: (value: FieldValue<FieldValues>) => boolean;
  isErrors: boolean;
  errorText: string;
}
