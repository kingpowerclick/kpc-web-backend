import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class CustomerDetail extends Component {
    static propTypes = {
      IDCustomer: PropTypes.string,
      CustomerName: PropTypes.string
    }
    render() {
      const styles = require('./customerDetail.scss');
      return (
          <div className={ styles['customer-detail'] }>
              <div className={ classNames(styles['customer-id'], styles.detail) }>
                  <div className={ styles.headline }>ID Customer</div>
                  <div><strong>100023</strong></div>
              </div>
              <div className={ classNames(styles['customer-name'], styles.detail) }>
                  <div className={ styles.headline }>Customer Name</div>
                  <div><strong>Sarannuth Chanluang</strong></div>
              </div>
              <div className={ classNames(styles['customer-email'], styles.detail) }>
                  <div className={ styles.headline }>Email</div>
                  <div><strong>080525.shiningshinee@gmail.com</strong></div>
              </div>
              <div className={ classNames(styles['customer-level'], styles.detail) }>
                  <div className={ styles.headline }>Customer Level</div>
                  <div><strong>Navy</strong></div>
              </div>
              <div className={ classNames(styles['register-date'], styles.detail) }>
                  <div className={ styles.headline }>Register Date</div>
                  <div><strong>Feb 25, 2017, 10:43:06 PM</strong></div>
              </div>
              <div className={ classNames(styles['lastest-login'], styles.detail) }>
                  <div className={ styles.headline }>Lastest Login</div>
                  <div><strong>Feb 25, 2017, 10:43:06 PM</strong></div>
              </div>
          </div>
      );
    }
}
