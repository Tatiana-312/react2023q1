import Form from '../../components/Form/Form';
import React from 'react';
import classes from './FormPage.module.css';
import FormCardList from '../../components/FormCardList/FormCardList';

const FormPage: React.FC = () => {
  return (
    <div data-testid="form-page" className={classes.form__container}>
      <Form />
      <FormCardList />
    </div>
  );
};

export default FormPage;
