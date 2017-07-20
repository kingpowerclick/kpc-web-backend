import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Collapse } from 'react-bootstrap';


export default class NewCampaignMenu extends Component {
    static propTypes = {
      mainMenu: PropTypes.string,
      subMenu: PropTypes.string
    }
    constructor(...args) {
      super(...args);
      this.state = {};
      this.state.gwp = this.props.mainMenu === `Gwp` ? 'Gwp' : '';
      this.state.amount = this.props.mainMenu === `Amount` ? 'Amount' : '';
      this.state.shipping = this.props.mainMenu === `Shipping` ? 'Shipping' : '';
    }
    render() {
      const { subMenu } = this.props;
      const styles = require('./newCampaignMenu.scss');
      return (
            <div className={styles['panel-content']}>
                <p className={styles['list-menu']}>Set Campaign Info</p>
                <p className={styles['list-menu']}>- Percent Discount (0)</p>
                <div className={styles['list-menu']} onClick={ ()=> this.setState({ amount: !this.state.amount }) }>
                    - Amount Discount (0)
                </div>
                <Collapse className={ styles['panel-collapse'] } in={ this.state.amount }>
                    <ul className={styles['gwp-globle-menu']}>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Amounta` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/addnewcampaign` }><label><input type="radio" >Get Discount Amount (1)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Amountb` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/addnewcampaign/getdiscountamountoff` }><label><input type="radio">Buy Amount XXX baht Get Discount Amount off (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Amountc` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/addnewcampaign/buyitem` }><label><input type="radio">Buy items X  Get Discount Amount (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Amountd` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/addnewcampaign/discountpercentoff` }><label><input type="radio">Buy item X get item Y at Discount Amount off (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Amounte` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/addnewcampaign/buyfirststtime` }><label><input type="radio">Buy 1st time full price, 2nd item X Amount off, 3rd item XX Amount off(0)</input></label></Link></li>
                    </ul>
                </Collapse>
                <div className={styles['list-menu']} onClick={ ()=> this.setState({ gwp: !this.state.gwp }) }>
                    - GWP (0)
                </div>
                <Collapse className={ styles['panel-collapse'] } in={ this.state.gwp }>
                    <ul className={styles['gwp-globle-menu']}>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Gwpa` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/gwp/buyamount` }><label><input type="radio" >Buy amount XXX baht GET GWP (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Gwpb` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/gwp/buyany` }><label><input type="radio">Buy A + any item GET GWP (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Gwpc` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/gwp/buyitem` }><label><input type="radio">Buy item X  GET GWP (0)</input></label></Link></li>
                    </ul>
                </Collapse>
                <div className={styles['list-menu']} onClick={ ()=> this.setState({ shipping: !this.state.shipping }) }>
                    - Shipping Fee (0)
                </div>
                <Collapse className={ styles['panel-collapse'] } in={ this.state.shipping }>
                    <ul className={styles['gwp-globle-menu']}>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Shippinga` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/shipping/buyamountcountry` }><label><input type="radio" >Buy amount XXX baht GET GWP (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Shippingb` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/shipping/buyamountshipping` }><label><input type="radio">Buy A + any item GET GWP (0)</input></label></Link></li>
                        <li className={ classNames( styles['gwp-globle-menu-list'], subMenu === `Shippingc` ? styles['menu-active'] : '' ) }><Link to={ `/marketing/shipping/buyitem` }><label><input type="radio">Buy item X  GET GWP (0)</input></label></Link></li>
                    </ul>
                </Collapse>
                <p className={styles['list-menu']}>- End of the Bill Discount (0)</p>
            </div>
        );
    }
}
