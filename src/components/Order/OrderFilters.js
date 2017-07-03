import React, {Component} from 'react';
import classNames from 'classNames';

import { ButtonToolbar, Dropdown, Button, MenuItem, InputCalendar} from 'react-bootstrap';

export default class CustomerFilters extends Component {
  render() {
    const styles = require('./orderFilters.scss');
    return (
    	<li className={ styles.filter }><i className="fa fa-filter"></i>Filters
            <div className={ styles['box-filters'] }>
                <div className={ styles['box-filters-detail'] }>
                    <form>
                        <div className="row">
                            <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                <label className={ styles['box-label'] }>ID</label>
                                <input className="form-control" id="filter-id" name="filter-id"/>
                            </div>
                            <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                <label className={ styles['box-label'] }>Email</label>
                                <input className="form-control" id="filter-email" name="filter-email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                <label className={ styles['box-label'] }>Purchase Point</label>
                                <ButtonToolbar>
                                    <Dropdown id="filter-purchase-point">
                                        <Button className={ styles['detail-button-dropdown'] }>All Location</Button>
                                        <Dropdown.Toggle/>
                                        <Dropdown.Menu>
                                            <MenuItem eventKey="1">Location 1</MenuItem>
                                            <MenuItem eventKey="2">Location 2</MenuItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ButtonToolbar>
                            </div>
                            <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                <label className={ styles['box-label'] }>Payment Method</label>
                                <ButtonToolbar>
                                    <Dropdown id="filter-payment-method">
                                        <Button className={ styles['detail-button-dropdown'] }>All Location</Button>
                                        <Dropdown.Toggle/>
                                        <Dropdown.Menu>
                                            <MenuItem eventKey="1">Location 1</MenuItem>
                                            <MenuItem eventKey="2">Location 2</MenuItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ButtonToolbar>
                            </div>
                            <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                <label className={ styles['box-label'] }>Order Status</label>
                                <ButtonToolbar>
                                    <Dropdown id="filter-order-status">
                                        <Button className={ styles['detail-button-dropdown'] }>All Location</Button>
                                        <Dropdown.Toggle/>
                                        <Dropdown.Menu>
                                            <MenuItem eventKey="1">Location 1</MenuItem>
                                            <MenuItem eventKey="2">Location 2</MenuItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ButtonToolbar>
                            </div>
                        </div>
                        <div className="row">
                            <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                <label className={ styles['box-label'] }>Email</label>
                                <InputCalendar/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </li>
    );
  }
}
