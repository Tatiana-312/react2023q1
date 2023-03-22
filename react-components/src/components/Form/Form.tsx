import Input from '../../components/Input/Input';
import React from 'react';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import classes from './Form.module.css';
import { CardData } from './cardData.interface';
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

  private isNameValid = (): boolean => {
    if (!/^[A-Z][a-z]{1,28}$/.test(this.nameInput.current!.value)) {
      this.setState({
        nameError:
          'Name must start with a capital letter and contain more than 1 latin letter without spaces',
      });
      return false;
    } else {
      this.setState({ nameError: '' });
      return true;
    }
  };

  private isDateValid = (): boolean => {
    const inputDate = new Date(this.dateInput.current!.value);
    const currentDate = new Date();
    if (inputDate < currentDate) {
      this.setState({ dateError: 'Сannot be selected earlier than the current date' });
      return false;
    } else {
      this.setState({ dateError: '' });
      return true;
    }
  };

  private isFileValid = (): boolean => {
    if (!/^.*\.(jpg|JPG|png|PNG)$/.test(this.fileInput.current!.value)) {
      this.setState({ fileError: 'Only images allowed' });
      return false;
    } else {
      this.setState({ fileError: '' });
      return true;
    }
  };

  isValuesValid = (): boolean => {
    const isValidName = this.isNameValid();
    const isValidDate = this.isDateValid();
    const isValidFile = this.isFileValid();

    if (isValidName && isValidDate && isValidFile) {
      return true;
    }
    return false;
  };

  resetValues = (): void => {
    this.nameInput.current!.value = '';
    this.dateInput.current!.value = '';
    this.countrySelect.current!.value = 'Belarus';
    this.fileInput.current!.value = '';
    this.paymentSwitch.current!.checked = false;
    this.permissionCheckbox.current!.checked = false;
    this.setState({ nameError: '' });
    this.setState({ dateError: '' });
    this.setState({ fileError: '' });
  };

  setSuccessMessage = (): void => {
    this.setState({
      dataSaveMessage: 'Data saved successfully!',
    });
  };

  getCardData = (): CardData => {
    return {
      name: this.nameInput.current!.value,
      date: this.dateInput.current!.value,
      country: this.countrySelect.current!.value,
      file: URL.createObjectURL((this.fileInput.current!.files as FileList)[0]),
      payment: this.getCurrentSwitchValue(this.paymentSwitch.current!.checked),
    };
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const cardData: CardData = this.getCardData();

    if (this.isValuesValid()) {
      this.props.saveCard(cardData);
      this.setSuccessMessage();
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
