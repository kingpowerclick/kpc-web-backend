import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import { MenuItem, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';

export default class FilterId extends Component {
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
            <div className={ styles['filter-id']}>
                <ButtonGroup justified className={ styles['filter-customer-id'] }>
                    <DropdownButton title={ title } className={ styles['btn-customer-id'] }>
                        { listItems }
                    </DropdownButton>
                    <input className={ classNames(styles['btn-customer-search'], 'form-control') } placeholder="Search" />
                    <Button href="#" className={ styles['btn-customer-search-icon'] }><i className="fa fa-search"></i></Button>
                </ButtonGroup>
            </div>
    );
  }
}
