import { InputsProperties } from './inputsProperties.interface';
import Form from './Form';

class Constants {
  form: Form;
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  inputsProperties: InputsProperties[];
  countries: string[];

  constructor(form: Form) {
    this.form = form;
    this.nameInput = form.nameInput;
    this.dateInput = form.dateInput;
    this.fileInput = form.fileInput;

    this.inputsProperties = [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        refer: this.nameInput,
      },
      {
        type: 'date',
        label: 'Date of delivery',
        name: 'date',
        refer: this.dateInput,
      },
      {
        type: 'file',
        label: 'Book cover',
        name: 'file',
        refer: this.fileInput,
      },
    ];

    this.countries = [
      'Belarus',
      'Georgia',
      'Germany',
      'Kazakhstan',
      'Kyrgyzstan',
      'Poland',
      'Russia',
      'Ukraine',
      'Uzbekistan',
    ];
  }
}

export default Constants;
