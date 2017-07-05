import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import { MenuItem, ButtonToolbar, Dropdown, Button } from 'react-bootstrap';

export default class FilterActionSelect extends Component {
    static propTypes = {
      title: PropTypes.string,
      selectOption: PropTypes.array
    }
  render() {
    const styles = require('./baseFilters.scss');
    const { selectOption, title} = this.props;
    const listItems = selectOption.map((selectOptions, index) =>
        <MenuItem eventKey={ index }>{ selectOptions }</MenuItem>
    );
    return (
        <div className={ styles['filter-action']}>
            <ButtonToolbar>
                <Dropdown id="dropdown-custom-2">
                    <Button bsStyle={classNames('btn-default', styles['btn-action'])}>{ title }</Button>
                    <Dropdown.Toggle bsStyle="btn-default"/>
                    <Dropdown.Menu className="super-colors">
                        { listItems }
                    </Dropdown.Menu>
                </Dropdown>
             </ButtonToolbar>
        </div>
    );
  }
}
