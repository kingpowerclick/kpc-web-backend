import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class AddSpecificGroup extends Component {
    render() {
      const styles = require('./addSpecificGroup.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['add-specific-group-view']) }>
                    <header className={ styles['page-header']}>
                        <div className={ styles['page-title']}>
                            <h1 className={ styles.header }><strong>Add Specific Group</strong></h1>
                            <Breadcrumb breadcrumb={ "Marketing > Add New Specific Group" }/>
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
                            <p className={styles['list-menu']}>Set Specific Group Info</p>
                        </div>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Set Specific Group Info</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Specific Group Info name</label>
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
							<p className={styles['list-menu']}>Include Product</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>This group can be included the product by</label>
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
                                    </div>
                                </div>
                            </div>
                            <p className={styles['list-menu']}>Exclude Product</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>This group can be excluded the product by</label>
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
                                    <label className={styles['control-label']}>Result of excluded </label>
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
                        </div>
                    </div>
                    <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }> Save</button>
                </div>
            </div>
        </div>
      );
    }
}
