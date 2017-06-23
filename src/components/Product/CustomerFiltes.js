import React, {Component} from 'react';

export default class CustomerFiltes extends Component {
  render() {
    const styles = require('./CustomerFiltes.scss');
    return (
        <li className={ styles.filter }><i className="fa fa-cog"></i>Columes</li>
    );
  }
}
