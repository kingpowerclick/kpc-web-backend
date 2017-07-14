import React, {Component} from 'react';

export default class TablePromoCode extends Component {
  render() {
    const styles = require('./tablePromoCode.scss');
    return (
        <table className="table table-striped">
            <thead>
                <tr className={ styles['title-table']}>
                    <th className={ styles['promo-checkbox'] }><input type="checkbox"/></th>
                    <th className={ styles['promo-code'] }>Promo Code number</th>
                    <th className={ styles['promo-creted'] }>Created on</th>
                    <th className={ styles['promo-used'] }>Used</th>
                    <th className={ styles['promo-time'] }>Time Used</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>1.    SCB001</td>
                    <td className={ styles['overflow-td'] }>11/05/2017 06:03:12 AM</td>
                    <td>No</td>
                    <td>0</td>
                </tr>
                 <tr>
                    <td><input type="checkbox"/></td>
                    <td>1.    SCB001</td>
                    <td className={ styles['overflow-td'] }>11/05/2017 06:03:12 AM</td>
                    <td>No</td>
                    <td>0</td>
                </tr><tr>
                    <td><input type="checkbox"/></td>
                    <td>1.    SCB001</td>
                    <td className={ styles['overflow-td'] }>11/05/2017 06:03:12 AM</td>
                    <td>No</td>
                    <td>0</td>
                </tr><tr>
                    <td><input type="checkbox"/></td>
                    <td>1.    SCB001</td>
                    <td className={ styles['overflow-td'] }>11/05/2017 06:03:12 AM</td>
                    <td>No</td>
                    <td>0</td>
                </tr><tr>
                    <td><input type="checkbox"/></td>
                    <td>1.    SCB001</td>
                    <td className={ styles['overflow-td'] }>11/05/2017 06:03:12 AM</td>
                    <td>No</td>
                    <td>0</td>
                </tr><tr>
                    <td><input type="checkbox"/></td>
                    <td>1.    SCB001</td>
                    <td className={ styles['overflow-td'] }>11/05/2017 06:03:12 AM</td>
                    <td>No</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    );
  }
}
