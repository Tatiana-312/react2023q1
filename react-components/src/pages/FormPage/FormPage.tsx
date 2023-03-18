import Form from '../../components/Form/Form';
import React from 'react';
import classes from './FormPage.module.css';

class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={classes.form__container}>
        <Form />
      </div>
    );
  }
}

export default FormPage;
