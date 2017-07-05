import React, {Component} from 'react';
import classNames from 'classnames';

export default class ProductManageDynamicAttribute extends Component {
  render() {
    const styles = require('./productFilters.scss');
    return (
        <li className={ classNames( styles.filter, styles['filter-mda'])}><i className="fa fa-share-square-o"></i>Manage Custom Attribute</li>
    );
  }
}
