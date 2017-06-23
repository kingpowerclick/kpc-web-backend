import React, {Component} from 'react';
import { LeftMenu } from 'components';
import { Footer } from 'components';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <LeftMenu/>
        <div>
          <h1>About Us</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}
