import Title from '../../components/Title/Title';
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div data-testid="about-page">
        <Title {...{ title: 'About our Book Shop' }} />
      </div>
    );
  }
}

export default About;
