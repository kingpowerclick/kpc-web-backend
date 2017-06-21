import React, { Component } from 'react';
import classNames from 'classnames';

export default class Hello extends Component {
  render() {
    const styles = require('./hello.scss');

    return (
      <div className={ classNames(styles['hello-page'], styles.hello)}>
        <div>HELLO</div>
      </div>
    );
  }
}
