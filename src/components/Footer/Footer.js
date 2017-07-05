// import React, {Component, PropTypes} from 'react';
import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const styles = require('./footer.scss');
    const logoFooter = require('./full-logo-kingpower.png');
    return (
      <footer className={ styles.footer }>
          <img src={ logoFooter } className={ styles['footer-image'] }/>
      </footer>
    );
  }
}
