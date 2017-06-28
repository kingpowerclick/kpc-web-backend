import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage, Breadcrumb, CustomerFilters, CustomerColumes, CustomerExport } from 'components';

import { MenuItem, ButtonToolbar, Dropdown, Button, ButtonGroup, DropdownButton} from 'react-bootstrap';

export default class CustomerOrder extends Component {
  render() {
    const styles = require('./customer.scss');
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
                                <CustomerExport/>
                            </ul>
                        </div>
                    </header>
                    <section className={ styles['wrapper-content']}>
                        <div className={ styles.content}>
                            <div className={ classNames(styles['filter-customer-list'])}>
                                <div className={ classNames(styles['wrapper-filter'])}>
                                    <div className={ styles['filter-left']}>
                                        <div className={ styles['filter-action']}>
                                            <ButtonToolbar>
                                                <Dropdown id="dropdown-custom-2">
                                                    <Button bsStyle={classNames('btn-default', styles['btn-action'])}>Action</Button>
                                                    <Dropdown.Toggle bsStyle="btn-default"/>
                                                    <Dropdown.Menu className="super-colors">
                                                        <MenuItem eventKey="1" active>Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3">Active Item</MenuItem>
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                             </ButtonToolbar>
                                        </div>
                                        <div className={ styles['filter-id']}>
                                            <ButtonGroup justified className={ styles['filter-customer-id'] }>
                                                <DropdownButton title="Customer ID" className={ styles['btn-customer-id'] }>
                                                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                                                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                                                </DropdownButton>
                                                <input className={ classNames(styles['btn-customer-search'], 'form-control') } placeholder="Search" />
                                                <Button href="#" className={ styles['btn-customer-search-icon'] }><i className="fa fa-search"></i></Button>
                                            </ButtonGroup>
                                        </div>
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
                                                <th className={ styles['customer-zip'] }>Zip</th>
                                                <th className={ styles['customer-id-passport'] }>ID Passport</th>
                                                <th className={ styles['customer-country'] }>Country</th>
                                                <th className={ styles['customer-state'] }>State/ Province</th>
                                                <th className={ styles['customer-nationality'] }>Nationality</th>
                                                <th className={ styles['customer-since'] }>Customer since</th>
                                                <th className={ styles['customer-birth'] }>Date of Birth</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
                                                <td>Thai</td>
                                                <td>Feb 25, 2017 11:25:27 PM	</td>
                                                <td>Feb 17, 1986</td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"/></td>
                                                <td>100014</td>
                                                <td>Miss Nuttaya Chutibuat</td>
                                                <td>nuttaya.c@gmail.com</td>
                                                <td>0811111111</td>
                                                <td>10600</td>
                                                <td>1234567890123</td>
                                                <td>Thaiiland</td>
                                                <td>Bkk</td>
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
