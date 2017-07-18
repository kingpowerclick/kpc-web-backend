import React, {Component} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';


export default class LeftMenu extends Component {
    showSubmenu = () => {
      const menu = document.getElementsByClassName('menu-product').length;
      console.log('menu : ' + menu);
      if (menu > 0) {
        document.getElementById('Products').classList.add('hidden');
        document.getElementById('Products').classList.remove('menu-product');
      } else {
        document.getElementById('Products').classList.remove('hidden');
        document.getElementById('Products').classList.add('menu-product');
        document.getElementById('Marketing').classList.add('hidden');
        document.getElementById('Marketing').classList.remove('menu-marketing');
      }
    }
    showSubmenuMarket = () => {
      const marketing = document.getElementsByClassName('menu-marketing').length;
      console.log('marketing : ' + marketing);
      if (marketing > 0) {
        document.getElementById('Marketing').classList.add('hidden');
        document.getElementById('Marketing').classList.remove('menu-marketing');
      } else {
        document.getElementById('Marketing').classList.remove('hidden');
        document.getElementById('Marketing').classList.add('menu-marketing');
        document.getElementById('Products').classList.add('hidden');
        document.getElementById('Products').classList.remove('menu-product');
      }
    }
    render() {
      const styles = require('./leftMenu.scss');
      const logoImg = require('./KP-white.png');
      return (
            <div id="mySidenav" className={ styles.sidenav }>
                <div className={ styles.logo }><img src={ logoImg }/></div>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-cart">Order</Tooltip>}>
                    <Link to={ `/orders` } className={ styles.menu }> <i className="fa fa-shopping-cart"></i></Link>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-product">Products</Tooltip>}>
                    <a className={ styles.menu } href="#" onClick={ this.showSubmenu } >
                        <i className="fa fa-archive"></i>
                        <div className={ classNames(styles['sub-menu'], 'hidden') } id="Products">
                            <ul className="list-unstyled">
                            <li className={ styles['sub-menu-head'] }>Products</li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Product
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Manage Custom Attribute
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
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-user">Customer</Tooltip>}>
                    <Link to={ `/customer` } className={ styles.menu }> <i className="fa fa-user"></i></Link>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-marketing">Marketing</Tooltip>}>
                    <a className={ styles.menu } href="#" onClick={ this.showSubmenuMarket }> <i className="fa fa-bookmark"></i>
                        <div className={ classNames(styles['sub-menu'], 'hidden') } id="Marketing">
                            <ul className="list-unstyled">
                            <li className={ styles['sub-menu-head'] }>Marketing</li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Marketing
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Specific Group
                            </li>
                            <li className={ classNames('dropdown', styles['sub-menu-list']) }>
                                <i className={ classNames('fa', 'fa-play', styles['sub-menu-list-hover']) }></i> Brand and Member Discount Limitation
                            </li>
                            <li className={styles.footer}></li>
                            </ul>
                        </div>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="menu-setting">Setting</Tooltip>}>
                    <a className={ classNames(styles.menu, 'hidden') } href="#"> <i className="fa fa-cog"></i> </a>
                </OverlayTrigger>
            </div>
        );
    }
}
