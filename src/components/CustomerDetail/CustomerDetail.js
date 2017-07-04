import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class CustomerDetail extends Component {
    static propTypes = {
      IDCustomer: PropTypes.string,
      CustomerName: PropTypes.string
    }
    render() {
      const styles = require('./customerDetail.scss');
      const customerLevel = require('./bitmap@3x.png');
      return (
          <div className={ styles['customer-detail'] }>
              <div className={ classNames(styles['customer-register-date'], styles.detail) }>
                  <div className={ styles.headline }>Register Date</div>
                  <div><strong>Feb 25, 2017, 10:43:06 PM</strong></div>
              </div>
              <div className={ classNames(styles['customer-lastest-login'], styles.detail) }>
                  <div className={ styles.headline }>Lastest Login</div>
                  <div><strong>Feb 25, 2017, 10:43:06 PM</strong></div>
              </div>
              <div className={ classNames(styles['customer-level-image'], styles.detail) }>
                  <img src={ customerLevel } className={ styles['level-image'] }/>
              </div>
              <div className={ classNames(styles['customer-level'], styles.detail) }>
                  <div className={ styles.headline }>Customer Level</div>
                  <div><strong>Navy</strong></div>
              </div>
              <div className={ classNames(styles['customer-carat-total'], styles.detail) }>
                  <div className={ styles.headline }>Carat Total</div>
                  <div><strong>10,002</strong></div>
              </div>
              <div className={ classNames(styles['customer-nationality'], styles.detail) }>
                  <div className={ styles.headline }>Nationality</div>
                  <div><strong>Thai</strong></div>
              </div>
              <div className={ classNames(styles['customer-email'], styles.detail) }>
                  <div className={ styles.headline }>Email</div>
                  <div><strong>080525.shiningshinee@gmail.com</strong></div>
              </div>
          </div>
      );
    }
}
