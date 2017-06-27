import React, {Component} from 'react';
import classNames from 'classnames';

export default class ProductButtonAdd extends Component {
  render() {
    const styles = require('./productFilters.scss');
    return (
        <li className={ classNames( styles.filter, styles['add-product'])}>
            <div className="dropdown">
                <button className={ classNames(styles['button-blue'], 'btn', 'btn-default', 'dropdown-toggle')} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Add Products
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
        </li>
    );
  }
}
