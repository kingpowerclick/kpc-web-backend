import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class ShippingGlobalFeeFreeCountry extends Component {
    render() {
      const styles = require('./shippingGlobalFeeFreeCountry.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['shipping-global-fee-free-view']) }>
                    <header className={ styles['page-header']}>
                        <div className={ styles['page-title']}>
                            <h1 className={ styles.header }><strong>Add New Shipping fee Global</strong></h1>
                            <Breadcrumb breadcrumb={ "Marketing > Add New Shipping Global" }/>
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
                            <p className={styles['list-menu']}>Set Shipping fee Global Info</p>
                            <p className={styles['list-menu']}>- Shipping Fee (0)</p>
                            <ul className={styles['gwp-globle-menu']}>

                                <li className={ classNames( styles['gwp-globle-menu-list'], styles['menu-active'] ) }><label><input type="radio" >Buy amount XXX baht GET free Shipping Fee throughout country  (0)</input></label></li>
                                <li className={ styles['gwp-globle-menu-list'] }><label><input type="radio">Buy amount XXX baht with shipping fee xxx baht (0)</input></label></li>
                                <li className={ styles['gwp-globle-menu-list'] }><label><input type="radio">Buy Item X Get free shipping fee (0)</input></label></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Buy amount XXX baht GET free Shipping Fee throughout country</p>
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
                                        <label>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <label>THB Get FREE SHIPPING</label>
                                        <div className={styles['divied-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Free Shipping by location</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles['control-on-off']}>
                                            <label className="radio-inline"><input type="radio">All Location</input></label>
                                            <label className="radio-inline">OR</label>
                                            <label className="radio-inline"><input type="radio">Location is</input>
                                                <label>
                                                    <SplitButton title="none" pullRight id="split-button-pull-right">
                                                        <MenuItem eventKey="1">Action</MenuItem>
                                                        <MenuItem eventKey="2">Another action</MenuItem>
                                                        <MenuItem eventKey="3">Something else here</MenuItem>
                                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                                    </SplitButton>
                                                </label>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Location is </label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>--</label>
                                        </div>
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
