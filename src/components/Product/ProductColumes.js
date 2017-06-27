import React, {Component} from 'react';

export default class ProductColumes extends Component {
  render() {
    const styles = require('./productFilters.scss');
    return (
    	<li className={ styles.filter }><i className="fa fa-cog"></i>Columes</li>
    );
  }
}
