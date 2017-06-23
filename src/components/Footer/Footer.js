// import React, {Component, PropTypes} from 'react';
import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const styles = require('./Footer.scss');
    const logoFooter = require('./full-logo-kingpower.png');
    return (
      <footer className={ styles.footer }>
          <img src={ logoFooter }/>
      </footer>
    );
  }
}
