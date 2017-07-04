import React, {Component} from 'react';

export default class InputCalendar extends Component {
  render() {
    const styles = require('./inputCalendar.scss');
    return (
        <div>
            <label className={ styles['box-sublabel'] }>From</label>
            <input className="form-control" name="filter-a" name="filter-email"/>
            <label className={ styles['box-sublabel'] }>To</label>
            <input className="form-control" name="filter-b" name="filter-email"/>
        </div>
    );
  }
 }
