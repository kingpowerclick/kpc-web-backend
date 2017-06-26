import React, {Component} from 'react';
import classNames from 'classnames';

export default class CustomerManageDynamicAttribute extends Component {
  render() {
    const styles = require('./CustomerFiltes.scss');
    return (
        <li className={ classNames( styles.filter, styles['filter-mda'])}><i className="fa fa-share-square-o"></i>Manage Dynamic Attribute</li>
    );
  }
}
