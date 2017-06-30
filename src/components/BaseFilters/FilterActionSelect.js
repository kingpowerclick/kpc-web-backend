import React, {Component} from 'react';
import classNames from 'classnames';
import { MenuItem, ButtonToolbar, Dropdown, Button } from 'react-bootstrap';

export default class FilterActionSelect extends Component {
  render() {
    const styles = require('./baseFilters.scss');
    return (
        <div className={ styles['filter-action']}>
            <ButtonToolbar>
                <Dropdown id="dropdown-custom-2">
                    <Button bsStyle={classNames('btn-default', styles['btn-action'])}>Action</Button>
                    <Dropdown.Toggle bsStyle="btn-default"/>
                    <Dropdown.Menu className="super-colors">
                        <MenuItem eventKey="1" active>Cancel order</MenuItem>
                        <MenuItem eventKey="2">Hold</MenuItem>
                        <MenuItem eventKey="3">Unhold</MenuItem>
                        <MenuItem eventKey="5">link</MenuItem>
                        <MenuItem eventKey="6">Print Invoice</MenuItem>
                        <MenuItem eventKey="7">Print packing slip</MenuItem>
                    </Dropdown.Menu>
                </Dropdown>
             </ButtonToolbar>
        </div>
    );
  }
}
