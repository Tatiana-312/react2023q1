import Form from './Form';

class FormValidatorService {
  form: Form;
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  paymentSwitch: React.RefObject<HTMLInputElement>;
  permissionCheckbox: React.RefObject<HTMLInputElement>;

  constructor(form: Form) {
    this.form = form;
    this.nameInput = form.nameInput;
    this.dateInput = form.dateInput;
    this.countrySelect = form.countrySelect;
    this.fileInput = form.fileInput;
    this.paymentSwitch = form.paymentSwitch;
    this.permissionCheckbox = form.permissionCheckbox;
  }

  private messages = {
    nameError:
      'Name must start with a capital letter and contain more than 1 latin letter without spaces',
    dateError: 'Сannot be selected earlier than the current date',
    fileError: 'Only images allowed',
    checkboxError: 'Please check this box if you want to proceed',
    selectError: 'Please choose your country',
  };

  private setValidationError = (stateKey: string, errorMessage: string): boolean => {
    this.form.setState({
      [stateKey]: errorMessage,
    });
    return false;
  };

  private deleteValidationError = (stateKey: string): boolean => {
    this.form.setState({ [stateKey]: '*' });
    return true;
  };

  private isNameValid = (): boolean => {
    const nameInput = this.nameInput.current!;
    if (!nameInput.value || !/^[A-Z][a-z]{1,28}$/.test(nameInput.value)) {
      return this.setValidationError('nameError', this.messages.nameError);
    } else {
      return this.deleteValidationError('nameError');
    }
  };

  private isDateValid = (): boolean => {
    const dateInput = this.dateInput.current!;
    const inputDate = new Date(dateInput.value);
    const currentDate = new Date();
    if (!dateInput.value || inputDate < currentDate) {
      return this.setValidationError('dateError', this.messages.dateError);
    } else {
      return this.deleteValidationError('dateError');
    }
  };

  private isFileValid = (): boolean => {
    const fileInput = this.fileInput.current!;
    if (!fileInput.value || !/^.*\.(jpg|JPG|png|PNG)$/.test(fileInput.value)) {
      return this.setValidationError('fileError', this.messages.fileError);
    } else {
      return this.deleteValidationError('fileError');
    }
  };

  private isCheckboxValid = (): boolean => {
    if (!this.permissionCheckbox.current!.checked) {
      return this.setValidationError('checkboxError', this.messages.checkboxError);
    } else {
      return this.deleteValidationError('checkboxError');
    }
  };

  private isSelectValid = (): boolean => {
    if (this.countrySelect.current!.value === 'none') {
      return this.setValidationError('selectError', this.messages.selectError);
    } else {
      return this.deleteValidationError('selectError');
    }
  };

  isValuesValid = (): boolean => {
    const isNameValid = this.isNameValid();
    const isDateValid = this.isDateValid();
    const isFileValid = this.isFileValid();
    const isCheckboxValid = this.isCheckboxValid();
    const isSelectValid = this.isSelectValid();

    if (isNameValid && isDateValid && isFileValid && isCheckboxValid && isSelectValid) {
      return true;
    }
    return false;
  };
}
export default FormValidatorService;
