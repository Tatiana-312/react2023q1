import React from 'react';
import classes from './Title.module.css';
import { TitleProps } from './titleProps.interface';

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};

export default Title;
