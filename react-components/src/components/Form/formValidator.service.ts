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

  private setValidationMessage = (
    stateKey: string,
    errorMessage: string,
    isNotValid: boolean
  ): boolean => {
    if (isNotValid) {
      this.form.setState({
        [stateKey]: errorMessage,
      });
      return false;
    } else {
      this.form.setState({ [stateKey]: '*' });
      return true;
    }
  };

  private isNameValid = (): boolean => {
    const nameInput = this.nameInput.current!;
    const isNotValid =
      !nameInput.value || !/^[A-Z][a-z]{1,28}$/.test(nameInput.value) ? true : false;
    return this.setValidationMessage('nameError', this.messages.nameError, isNotValid);
  };

  private isDateValid = (): boolean => {
    const dateInput = this.dateInput.current!;
    const inputDate = new Date(dateInput.value);
    const currentDate = new Date();
    const isNotValid = !dateInput.value || inputDate < currentDate ? true : false;
    return this.setValidationMessage('dateError', this.messages.dateError, isNotValid);
  };

  private isFileValid = (): boolean => {
    const fileInput = this.fileInput.current!;
    const isNotValid =
      !fileInput.value || !/^.*\.(jpg|JPG|png|PNG)$/.test(fileInput.value) ? true : false;
    return this.setValidationMessage('fileError', this.messages.fileError, isNotValid);
  };

  private isCheckboxValid = (): boolean => {
    const isNotValid = !this.permissionCheckbox.current!.checked;
    return this.setValidationMessage('checkboxError', this.messages.checkboxError, isNotValid);
  };

  private isSelectValid = (): boolean => {
    const isNotValid = this.countrySelect.current!.value === 'none';
    return this.setValidationMessage('selectError', this.messages.selectError, isNotValid);
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
