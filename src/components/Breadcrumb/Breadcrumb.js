import React, {Component, PropTypes} from 'react';

export default class Breadcrumb extends Component {
    static propTypes = {
      breadcrumb: PropTypes.string
    }
    render() {
      const styles = require('./Breadcrumb.scss');
      const {breadcrumb} = this.props;
      return (
          <div className={ styles['page-breadcrumb'] }>
              <span>{ breadcrumb }</span>
          </div>
      );
    }
}
