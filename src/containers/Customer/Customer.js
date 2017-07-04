import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { FilterPage, Breadcrumb, CustomerFilters, CustomerColumes, ExportToCSV, FilterActionSelect, FilterId } from 'components';

export default class CustomerOrder extends Component {
  render() {
    const styles = require('./customer.scss');
    const filterActionSelectOption = ['Subscribe to Newsletter', 'Unsubscribe from Newsletter'];
    const filterIdSelectOption = ['Customer ID', 'Customer name', 'Phone', 'Email', 'Passport ID'];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={ classNames(styles['customer-view']) }>
                    <header className={ styles['page-header'] }>
                        <div className={ styles['page-title']}>
                            <h1 className={ styles.header }>Customer</h1>
                            <Breadcrumb breadcrumb={ "Customer" }/>
                          </div>
                        <div className={ styles['page-filter']}>
                            <ul className={ styles['list-filter']}>
                                <CustomerFilters/>
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
                                        <FilterActionSelect title="Action" selectOption={ filterActionSelectOption }/>
                                        <FilterId title="Customer ID" selectOption={ filterIdSelectOption }/>
                                    </div>
                                    <div className={ classNames(styles['filter-right']) }>
                                        <FilterPage/>
                                    </div>
                                </div>
                            </div>
                            <div className={ styles['table-detail'] }>
                                <div className={ styles['tab-content'] }>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className={ styles['title-table']}>
                                                <th className={ styles['cusotmer-box'] }><input type="checkbox"/></th>
                                                <th className={ styles['customer-id'] }>ID</th>
                                                <th className={ styles['cusotmer-name'] }>Customer<br/>Name</th>
                                                <th className={ styles['customer-email'] }>Customer<br/>Email</th>
                                                <th className={ styles['customer-phone'] }>Phone</th>
                                                <th className={ styles['customer-id-passport'] }>ID Passport</th>
                                                <th className={ styles['customer-country'] }>Lock Status</th>
                                                <th className={ styles['customer-nationality'] }>Nationality</th>
                                                <th className={ styles['customer-since'] }>Customer since</th>
                                                <th className={ styles['customer-birth'] }>Date of Birth</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td><Link to={`customer/order`}>100014</Link></td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>1234567890123</td>
                                                <td>Lock</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td><Link to={`customer/order`}>100014</Link></td>
                                                <td className={ styles['overflow-td'] }>Miss Nuttaya Chutibuat</td>
                                                <td className={ styles['overflow-td'] }>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>1234567890123</td>
                                                <td>Unlock</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
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
