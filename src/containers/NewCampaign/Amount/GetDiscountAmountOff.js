import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Breadcrumb} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class GetDiscountAmountOff extends Component {
    render() {
      const styles = require('./newCampaign.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['marketing-add-new-gwp-view']) }>
                    <header className={ styles['page-header']}>
                        <div className={ styles['page-title']}>
                            <h1 className={ styles.header }><strong>Add New Campaign</strong></h1>
                            <Breadcrumb breadcrumb={ "Marketing > Add New Campaign" }/>
                        </div>
                        <div className={ styles['sub-menu']}>
                            <ul>
                                <li><a href="#"><i className="fa fa-chevron-left"></i> Back </a></li>
                                <li><a href="#"><i className="fa fa-eye"></i> Preview </a></li>
                                <li><a href="#"><i className="fa fa-floppy-o"></i> Save and Exit </a></li>
                            </ul>
                        </div>
                    </header>
                    <div className={styles['panel-left']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Set Campaign Info</p>
                            <p className={styles['list-menu']}>- Percent Discount (0)</p>
                            <p className={styles['list-menu']}>- Amount Discount (0)</p>
                            <ul className={styles['gwp-globle-menu']}>
                                <li className={ styles['gwp-globle-menu-list'] }><Link to={ `/marketing/addnewcampaign` }><label><input type="radio" >Get Discount Amount (1)</input></label></Link></li>
                                <li className={ classNames( styles['gwp-globle-menu-list'], styles['menu-active'] ) }><label><input type="radio">Buy Amount XXX baht Get Discount Amount off (0)</input></label></li>
                                <li className={ styles['gwp-globle-menu-list'] }><Link to={ `/marketing/addnewcampaign/buyitem` }><label><input type="radio">Buy items X  Get Discount Amount (0)</input></label></Link></li>
                                <li className={ styles['gwp-globle-menu-list'] }><Link to={ `/marketing/addnewcampaign/discountpercentoff` }><label><input type="radio">Buy item X get item Y at Discount Amount off (0)</input></label></Link></li>
                                <li className={ styles['gwp-globle-menu-list'] }><Link to={ `/marketing/addnewcampaign/buyfirststtime` }><label><input type="radio">Buy 1st time full price, 2nd item X Amount off, 3rd item XX Amount off(0)</input></label></Link></li>
                            </ul>
                            <p className={styles['list-menu']}>- GWP (0)</p>
                            <p className={styles['list-menu']}>- Shipping Fee (0)</p>
                            <p className={styles['list-menu']}>- End of the Bill Discount (0)</p>
                        </div>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Buy Amount XXX baht Get Discount Amount off</p>
                            <div className={styles['form-group']}>
                                <label className={styles['control-label']}>Turn On/Off</label>
                                <div className={styles['control-on-off']}>
                                    <label className="radio-inline"><input type="radio">Off</input></label>
                                    <label className="radio-inline"><input type="radio">On</input></label>
                                </div>
                                <hr></hr>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Set Condition</label>
                                </div>
                                <div className={ classNames(styles['control-optional'], styles['top-border'])}>
                                    <div className={styles['content-option']}>
                                        <label>Buy amount</label>
                                        <label><input type="text" className="form-control"/></label>
                                        <label>THB</label>
                                        <label>Get Discount</label>
                                        <label><input type="text" className="form-control"/></label>
                                        <label>THB</label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}></label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>But not Exceed</label>
                                        <label><input type="text" className="form-control"/></label>
                                        <label>THB</label>
                                        <div className={styles['border-bottom-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>Product is</label>
                                        <label>
                                            <SplitButton title="none" pullRight id="split-button-pull-right">
                                                <MenuItem eventKey="1">Action</MenuItem>
                                                <MenuItem eventKey="2">Another action</MenuItem>
                                                <MenuItem eventKey="3">Something else here</MenuItem>
                                                <MenuItem eventKey="4">Separated link</MenuItem>
                                            </SplitButton>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Result of included </label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                        <div className={styles['border-bottom-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to exclude</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>Product is</label>
                                        <label>
                                            <SplitButton title="none" pullRight id="split-button-pull-right">
                                                <MenuItem eventKey="1">Action</MenuItem>
                                                <MenuItem eventKey="2">Another action</MenuItem>
                                                <MenuItem eventKey="3">Something else here</MenuItem>
                                                <MenuItem eventKey="4">Separated link</MenuItem>
                                            </SplitButton>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to exclude</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                        <label className={styles['control-label']}></label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['border-bottom']}></div>
                                </div>
                            </div>
                            <div className={styles['divied-blue']}></div>
                            <div className={styles['add-new-box']}>
                                <a href="#"><i className="fa fa-plus-circle"></i>Add New another Condition</a>
                            </div>
                        </div>
                    </div>
                    <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }> Save</button>
                </div>
            </div>
        </div>
      );
    }
}
