import React, {Component} from 'react';
import classNames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';


export default class LeftMenu extends Component {
    showSubmenu = () => {
      const menu = document.getElementsByClassName('menu-product').length;
      if (menu > 0) {
        document.getElementById('Products').classList.add('hidden');
        document.getElementById('Products').classList.remove('menu-product');
      } else {
        document.getElementById('Products').classList.remove('hidden');
        document.getElementById('Products').classList.add('menu-product');
      }
    }
    render() {
      const styles = require('./leftMenu.scss');
      const logoImg = require('./KP-white.png');
      return (
            <div id="mySidenav" className={ styles.sidenav }>
                <div className={ styles.logo }><img src={ logoImg }/></div>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-cart">Cart</Tooltip>}>
                    <a className={ styles.menu } href="#"> <i className="fa fa-shopping-cart"></i> </a>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-product">Products</Tooltip>}>
                    <a className={ styles.menu } href="#" onClick={ this.showSubmenu } data-toggle="tooltip" title="Product">
                        <i className="fa fa-archive"></i>
                        <div className={ classNames(styles['sub-menu'], 'hidden') } id="Products">
                            <ul className="list-unstyled">
                            <li className={ styles['sub-menu-head'] }>Products</li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Product
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Manage Attribute
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-label']) }> Special Label and Other </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Exclusive Launch Product
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Best Seller
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Hot Item
                            </li>
                            <li className={styles.footer}></li>
                            </ul>
                        </div>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-user">User</Tooltip>}>
                    <a className={ styles.menu } href="#"> <i className="fa fa-user"></i> </a>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-marketing">Marketing</Tooltip>}>
                    <a className={ styles.menu } href="#"> <i className="fa fa-bookmark"></i> </a>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-setting">Setting</Tooltip>}>
                    <a className={ styles.menu } href="#"> <i className="fa fa-cog"></i> </a>
                </OverlayTrigger>
            </div>
        );
    }
}
