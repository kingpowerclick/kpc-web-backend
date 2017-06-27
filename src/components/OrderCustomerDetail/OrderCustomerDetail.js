import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class OrderCustomerDetail extends Component {
    static propTypes = {
      IDCustomer: PropTypes.string,
      CustomerName: PropTypes.string
    }
    render() {
      const styles = require('./OrderCustomerDetail.scss');
      return (
          <div className={ styles['order-customer-detail'] }>
              <div className={ classNames(styles['order-customer-name'], styles.detail) }>
                  <div className={ styles.headline }>Customer Name</div>
                  <div><strong>Kritsana Yuenyong</strong></div>
              </div>
              <div className={ classNames(styles['order-date'], styles.detail) }>
                  <div className={ styles.headline }>Order Date</div>
                  <div><strong>May 5, 2017, 4:53:23 PM</strong></div>
              </div>
              <div className={ classNames(styles['order-status'], styles.detail) }>
                  <div className={ styles.headline }>Order Status</div>
                  <div><strong>Shipping</strong></div>
              </div>
          </div>
      );
    }
}
