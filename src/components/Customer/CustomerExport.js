import React, {Component} from 'react';
import classNames from 'classnames';

export default class CustomerExport extends Component {
  render() {
    const styles = require('./customerFilters.scss');
    return (
        <li className={ classNames( styles.filter, styles['filter-mda'])}><i className="fa fa-share-square-o"></i>Export to CSV</li>
    );
  }
}
