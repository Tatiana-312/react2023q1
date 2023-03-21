import React from 'react';
import { DataSaveMessageProps } from './dataSaveMessageProps.interface';
import classes from './DataSaveMessage.module.css';

class DataSaveMessage extends React.Component<DataSaveMessageProps> {
  constructor(props: DataSaveMessageProps) {
    super(props);
  }
  render() {
    return (
      <>
        <p className={classes.save_message}>{this.props.dataSaveMessage}</p>
      </>
    );
  }
}

export default DataSaveMessage;
