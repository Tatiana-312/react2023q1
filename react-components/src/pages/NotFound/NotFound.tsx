import React from 'react';
import classes from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div data-testid="not-found-page">
      <h1 className={classes.error_title}>404</h1>
      <h2 className={classes.error_subtitle}>Page Not Found</h2>
    </div>
  );
};

export default NotFound;
