import React, {Component} from 'react';
import classNames from 'classnames';
import { MenuItem, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';

export default class FilterId extends Component {
  render() {
    const styles = require('./baseFilters.scss');
    return (
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
    );
  }
}
