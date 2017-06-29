import React, {Component} from 'react';

export default class CustomerFilters extends Component {
  render() {
    const styles = require('./customerFilters.scss');
    return (
    	<li className={ styles.filter }><i className="fa fa-filter"></i>Filters</li>
    );
  }
}
