// import React, {Component, PropTypes} from 'react';
import React, {Component} from 'react';

export default class LeftMenu extends Component {
  render() {
    const styles = require('./LeftMenu.scss');
    const logoImg = require('./KP-white.png');
    return (
      <div id="mySidenav" className={ styles.sidenav }>
        <div className={ styles.logo }><img src={ logoImg }/></div>
        <a className={ styles['sub-menu'] } href="#"> <i className="fa fa-shopping-cart"></i> </a>
        <a className={ styles['sub-menu'] } href="#"> <i className="fa fa-archive"></i> </a>
        <a className={ styles['sub-menu'] } href="#"> <i className="fa fa-user"></i> </a>
        <a className={ styles['sub-menu'] } href="#"> <i className="fa fa-bookmark"></i> </a>
        <a className={ styles['sub-menu'] } href="#"> <i className="fa fa-cog"></i> </a>
      </div>
    );
  }
}
