import Input from '../../components/Input/Input';
import React from 'react';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import classes from './Form.module.css';
import { CardsData } from './cardsData.interface';
import { FormProps } from './formProps.interface';
import { FormState } from './formState.interface';

class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  paymentSwitch: React.RefObject<HTMLInputElement>;
  permissionCheckbox: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.countrySelect = React.createRef();
    this.fileInput = React.createRef();
    this.paymentSwitch = React.createRef();
    this.permissionCheckbox = React.createRef();

    this.state = {
      disableSubmit: true,
      name: true,
      surname: true,
      date: true,
      country: true,
      file: true,
    };
  }

  getCurrentSwitchValue = (isChecked: boolean): string => {
    return isChecked ? 'Cash' : 'Card';
  };

  enableSubmit = (): void => {
    if (
      this.state.name &&
      this.state.surname &&
      this.state.date &&
      this.state.country &&
      this.state.file
    ) {
      this.setState((prevState) => {
        return { ...prevState, disableSubmit: false };
      });
    }
  };

  resetValues = (): void => {
    const nameField = this.nameInput.current as HTMLInputElement;
    const surnameField = this.surnameInput.current as HTMLInputElement;
    const dateField = this.dateInput.current as HTMLInputElement;
    const countryField = this.countrySelect.current as HTMLSelectElement;
    const fileField = this.fileInput.current as HTMLInputElement;
    const paymentField = this.paymentSwitch.current as HTMLInputElement;
    const permissionField = this.permissionCheckbox.current as HTMLInputElement;

    nameField.value = '';
    surnameField.value = '';
    dateField.value = '';
    countryField.value = 'Belarus';
    fileField.value = '';
    paymentField.checked = false;
    permissionField.checked = false;
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputBookCover = this.fileInput.current as HTMLInputElement;
    const cardsData: CardsData = {
      name: (this.nameInput.current as HTMLInputElement).value,
      surname: (this.surnameInput.current as HTMLInputElement).value,
      date: (this.dateInput.current as HTMLInputElement).value,
      country: (this.countrySelect.current as HTMLSelectElement).value,
      file: URL.createObjectURL((inputBookCover.files as FileList)[0]),
      payment: this.getCurrentSwitchValue((this.paymentSwitch.current as HTMLInputElement).checked),
    };

    this.props.saveCards(cardsData);
    this.resetValues();
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.length) {
      this.enableSubmit();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          label="Name"
          name="name"
          refer={this.nameInput}
          onChange={this.handleChange}
        />
        <Input
          type="text"
          label="Surname"
          name="surname"
          refer={this.surnameInput}
          onChange={this.handleChange}
        />
        <Input
          type="date"
          label="Date of delivery"
          name="date"
          refer={this.dateInput}
          onChange={this.handleChange}
        />
        <Select
          id="country"
          label="Choose your country"
          name="country"
          optionValues={[
            'Belarus',
            'Georgia',
            'Germany',
            'Kazakhstan',
            'Kyrgyzstan',
            'Poland',
            'Russia',
            'Ukraine',
            'Uzbekistan',
          ]}
          refer={this.countrySelect}
        />
        <Input
          type="file"
          label="Book cover"
          name="file"
          refer={this.fileInput}
          onChange={this.handleChange}
        />
        <ToggleSwitch
          title="Will you pay in cash or by credit card?"
          firstOption="Cash"
          secondOption="Credit Card"
          name="payment"
          refer={this.paymentSwitch}
        />
        <Checkbox
          name="permission"
          label="I consent to my personal data"
          refer={this.permissionCheckbox}
        />
        <input
          className={classes.submit__button}
          type="submit"
          value="submit"
          disabled={this.state.disableSubmit}
        />
      </form>
    );
  }
}

export default Form;
