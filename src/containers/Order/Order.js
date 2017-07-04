import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage, Breadcrumb, OrderFilters, CustomerColumes, ExportToCSV } from 'components';

export default class Order extends Component {
  render() {
    const styles = require('./order.scss');
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={ classNames(styles['customer-view']) }>
                    <header className={ styles['page-header'] }>
                        <div className={ styles['page-title']}>
                            <h1 className={ styles.header }>Orders</h1>
                            <Breadcrumb breadcrumb={ "Orders" }/>
                        </div>
                        <div className={ styles['page-filter']}>
                            <ul className={ styles['list-filter']}>
                                <OrderFilters/>
                                <CustomerColumes/>
                                <ExportToCSV/>
                            </ul>
                        </div>
                    </header>
                    <section className={ styles['wrapper-content']}>
                        <div className={ styles.content}>
                            <div className={ classNames(styles['filter-customer-list'])}>
                                <div className={ classNames(styles['wrapper-filter'])}>
                                    <div className={ styles['filter-left']}>
                                        {/* <FilterActionSelect/> */}
                                        {/* <FilterId/> */}
                                    </div>
                                    <div className={ classNames(styles['filter-right']) }>
                                    </div>
                                </div>
                            </div>
                            <div className={ styles['table-detail'] }>
                                <div className={ styles['tab-content'] }>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className={ styles['title-table']}>
                                                <th className={ styles['order-box'] }><input type="checkbox"/></th>
                                                <th className={ styles['order-id'] }>ID</th>
                                                <th className={ styles['order-name'] }>Customer name</th>
                                                <th className={ styles['order-status'] }>Status</th>
                                                <th className={ styles['order-payment'] }>Payment method</th>
                                                <th className={ styles['order-email'] }>Customer email</th>
                                                <th className={ styles['order-point'] }>Purchase point</th>
                                                <th className={ styles['order-purchase-date'] }>Purchase date</th>
                                                <th className={ styles['order-bill-name'] }>Bill-to name</th>
                                                <th className={ styles['order-ship-name'] }>Ship-to name</th>
                                                <th className={ styles['order-grand-total'] }>Grand total (base)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>Pending Payment</td>
                                                <td>BBL PAY</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>Thai Store</td>
                                                <td>11/11/16</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td>1,000.00 THB</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={ classNames(styles['filter-bottom'])}>
                                    <FilterPage/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
  }
}
