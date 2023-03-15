import Title from '../../components/Title/Title';
import React from 'react';
import classes from './About.module.css';

class About extends React.Component {
  render() {
    return (
      <div data-testid="about-page">
        <Title {...{pageTitle: 'About our Book Shop'}}/>
      </div>
    );
  }
}

export default About;