import React, {Component} from 'react';

export default class ProductFilters extends Component {
  render() {
    const styles = require('./productFilters.scss');
    return (
    	<li className={ styles.filter }><i className="fa fa-filter"></i>Filters</li>
    );
  }
}
