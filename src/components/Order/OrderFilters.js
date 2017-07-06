import React, {Component} from 'react';
import classNames from 'classnames';

import { ButtonToolbar, Dropdown, Button, MenuItem } from 'react-bootstrap';
import { InputCalendar } from 'components';

export default class OrderFilters extends Component {
    showFilters = () => {
      const boxFilter = document.getElementsByClassName('box-filters-active').length;
      if (boxFilter > 0) {
        document.getElementById('box-filters').classList.add('hidden');
        document.getElementById('box-filters').classList.remove('box-filters-active');
      } else {
        document.getElementById('box-filters').classList.remove('hidden');
        document.getElementById('box-filters').classList.add('box-filters-active');
      }
    }
    render() {
      const styles = require('./orderFilters.scss');
      return (
    	<li className={ styles.filter }><a href="#" onClick={ this.showFilters }><i className="fa fa-filter"></i>Filters</a>
            <div className={ classNames(styles['box-filters'], 'hidden') } id="box-filters">
                <div className={ styles['box-filters-detail'] }>
                    <form>
                        <div className={ styles['box-filters-body'] }>
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
                                    <label className={ styles['box-label'] }>Purchase Date</label>
                                    <InputCalendar/>
                                </div>
                                <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                    <label className={ styles['box-label'] }>Grand total (Base)</label>
                                    <input className="form-control" id="filter-id" name="filter-id"/>
                                </div>
                                <div className={ classNames('form-group', styles['box-filters-detail-item']) }>
                                    <label className={ styles['box-label'] }>Grand total (Purchased)</label>
                                    <input className="form-control" id="filter-id" name="filter-id"/>
                                </div>
                            </div>
                        </div>
                        <div className={ styles['box-filters-footer'] }>
                            <ButtonToolbar className={ styles['button-group'] }>
                                <Button bsSize="large" className={ styles.button }>Cancel</Button>
                                <Button bsStyle="primary" bsSize="large" className={ styles.button }>Apply Filters</Button>
                            </ButtonToolbar>
                        </div>
                    </form>
                </div>
            </div>
        </li>
      );
    }
}
