import React, {Component} from 'react';

export default class CustomerColumes extends Component {
  render() {
    const styles = require('./customerFilters.scss');
    return (
    	<li className={ styles.filter }><i className="fa fa-cog"></i>Columes</li>
    );
  }
}
