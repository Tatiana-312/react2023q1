import React from 'react';
import { DataSaveMessageProps } from './dataSaveMessageProps.interface';
import classes from './DataSaveMessage.module.css';

const DataSaveMessage: React.FC<DataSaveMessageProps> = ({ dataSaveMessage }) => {
  return (
    <>
      <p className={classes.save_message}>{dataSaveMessage}</p>
    </>
  );
};

export default DataSaveMessage;
