import Input from '../../components/Input/Input';
import React from 'react';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import classes from './Form.module.css';
import { CardsData } from './cardsData.interface';
import { FormProps } from './formProps.interface';
import { FormState } from './formState.interface';
import DataSaveMessage from '../DataSaveMessage/DataSaveMessage';

class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  paymentSwitch: React.RefObject<HTMLInputElement>;
  permissionCheckbox: React.RefObject<HTMLInputElement>;
  countries: string[];

  constructor(props: FormProps) {
    super(props);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.countrySelect = React.createRef();
    this.fileInput = React.createRef();
    this.paymentSwitch = React.createRef();
    this.permissionCheckbox = React.createRef();
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

    this.state = {
      disableSubmit: true,
      nameError: '',
      dateError: '',
      fileError: '',
      dataSaveMessage: '',
    };
  }

  getCurrentSwitchValue = (isChecked: boolean): string => {
    return isChecked ? 'Cash' : 'Card';
  };

  enableSubmit = (): void => {
    this.setState((prevState) => {
      return { ...prevState, disableSubmit: false };
    });
  };

  isValidInputs = (): boolean => {
    const nameField = this.nameInput.current as HTMLInputElement;
    const dateField = this.dateInput.current as HTMLInputElement;
    const fileField = this.fileInput.current as HTMLInputElement;

    const inputDate = new Date(dateField.value);
    const currentDate = new Date();
    let isValid = true;

    if (!/^[A-Z][a-z]{1,28}$/.test(nameField.value)) {
      this.setState({
        nameError:
          'Name must start with a capital letter and contain more than 1 latin letter without spaces',
      });
      isValid = false;
    } else {
      this.setState({ nameError: '' });
    }

    if (inputDate < currentDate) {
      this.setState({ dateError: 'Сannot be selected earlier than the current date' });
      isValid = false;
    } else {
      this.setState({ dateError: '' });
    }

    if (!/^.*\.(jpg|JPG|png|PNG)$/.test(fileField.value)) {
      this.setState({ fileError: 'Only images allowed' });
      isValid = false;
    } else {
      this.setState({ fileError: '' });
    }
    return isValid;
  };

  resetValues = (): void => {
    const nameField = this.nameInput.current as HTMLInputElement;
    const dateField = this.dateInput.current as HTMLInputElement;
    const countryField = this.countrySelect.current as HTMLSelectElement;
    const fileField = this.fileInput.current as HTMLInputElement;
    const paymentField = this.paymentSwitch.current as HTMLInputElement;
    const permissionField = this.permissionCheckbox.current as HTMLInputElement;

    nameField.value = '';
    dateField.value = '';
    countryField.value = 'Belarus';
    fileField.value = '';
    paymentField.checked = false;
    permissionField.checked = false;
    this.setState({ nameError: '' });
    this.setState({ dateError: '' });
    this.setState({ fileError: '' });
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputBookCover = this.fileInput.current as HTMLInputElement;

    const cardsData: CardsData = {
      name: (this.nameInput.current as HTMLInputElement).value,
      date: (this.dateInput.current as HTMLInputElement).value,
      country: (this.countrySelect.current as HTMLSelectElement).value,
      file: URL.createObjectURL((inputBookCover.files as FileList)[0]),
      payment: this.getCurrentSwitchValue((this.paymentSwitch.current as HTMLInputElement).checked),
    };

    if (this.isValidInputs()) {
      this.props.saveCard(cardsData);
      this.setState({
        dataSaveMessage: 'Data saved successfully!',
      });
      this.resetValues();
    }
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ dataSaveMessage: '' });
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
          errorText={this.state.nameError}
        />
        <Input
          type="date"
          label="Date of delivery"
          name="date"
          refer={this.dateInput}
          onChange={this.handleChange}
          errorText={this.state.dateError}
        />
        <Select
          id="country"
          label="Choose your country"
          name="country"
          optionValues={this.countries}
          refer={this.countrySelect}
        />
        <Input
          type="file"
          label="Book cover"
          name="file"
          refer={this.fileInput}
          onChange={this.handleChange}
          errorText={this.state.fileError}
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
        <DataSaveMessage dataSaveMessage={this.state.dataSaveMessage} />
      </form>
    );
  }
}

export default Form;
