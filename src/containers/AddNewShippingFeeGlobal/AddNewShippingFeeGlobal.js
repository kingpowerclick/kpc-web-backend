import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class AddNewShippingFeeGlobal extends Component {
    render() {
      const styles = require('./addNewShippingFeeGlobal.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['add-new-shipping-fee-global-view']) }>
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
                            <p className={styles['list-menu']}>- Shipping fee(0)</p>
                        </div>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Shipping fee Global Info</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Shipping fee Global  name</label>
                                </div>
                                <div className={ classNames(styles['control-optional'], styles['top-border'])}>
                                    <div className={styles['content-option']}>
                                        <label>
                                            <input type="text" className="form-control"/>
											<p>English* (It will default if you didn’t set for other language)</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
							<div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Description</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Status</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>
                                            <SplitButton title="Active" pullRight id="split-button-pull-right">
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
                                    <label className={styles['control-label']}>T&C of Cart Rule use</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>
							<p className={styles['list-menu']}>Schedule</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Start date</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>
											 <input type="text" placeholder="12/05/2017" />
											 <label>At</label>
											 <input type="text" placeholder="4:00PM" />
											</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>End date</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>
											 <input type="text" placeholder="12/05/2017" />
											 <label>At</label>
											 <input type="text" placeholder="4:00PM" />
											</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}></label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
										 <a href="#"><i className="fa fa-chevron-down"></i>Advance Schdule Setting</a>
                                    </div>
                                </div>
                            </div>
							<p className={styles['list-menu']}>Cart Rule limitation</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Cart Rule limitation</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
										<input type="text" className={styles['small-input']}/>
										<label className={styles['cart-rule-unit']}>times</label>
										<span className={styles['note-example']}>(e.g. 10 times) </span>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Limited usage per user</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <input type="text" className={styles['small-input']}/>
										<label className={styles['cart-rule-unit']}>times</label>
										<span className={styles['note-example']}>(e.g. 1 time per user or xxx times per user)</span>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Mininum purchase amount for activate this cartrule</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <input type="text" className={styles['small-input']}/>
											<label className={styles['cart-rule-unit']}>THB</label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Set Priority </label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <input type="text" className={styles['small-input']}/>
										<span className={styles['note-example']}>The Most priority is 0 and 99 is least priority.</span>
                                    </div>
                                </div>
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
