import React, {Component} from 'react';

export default class CustomerColumes extends Component {
  render() {
    const styles = require('./CustomerFiltes.scss');
    return (
      <li className={ styles.filter }><i className="fa fa-filter"></i>Filtes</li>
    );
  }
}
