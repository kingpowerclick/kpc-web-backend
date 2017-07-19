import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb, NewCampaginMenu} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class AddNewCampaignThirdItem extends Component {
    render() {
      const styles = require('./addNewCampaignThirdItem.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames( styles['third-item-view']) } >
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
                    <div className={ styles['panel-left']} >
                        <NewCampaginMenu subMenu= { `Amounta` } mainMenu={ `Amount` }/>
                    </div>
                    <div className={ styles['panel-right']} >
                        <div className={ styles['panel-content']} >
                            <p className={ styles['list-menu']} >Buy 1st time full price, 2nd item X % off, 3rd item XX % off</p>
                            <div className={ styles['form-group']} >
                                <label className={ styles['control-label']} >Turn On/Off</label>
                                <div className={ styles['control-on-off']} >
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
                                    <div className={ styles['content-option']} >
                                        <div className={ styles['items-discount']}><span>If you buy Item X</span>
                                        <label>at  1st time At Discount </label>
                                        <input type="text" className={ styles['small-input']} /> %
                                        <hr className={ styles['hr-text'] } data-content="And" ></hr>
                                        </div>
                                        <div className={ styles['items-discount']}><span>If you buy Item X</span>
                                        <label>at  2nd time At Discount </label>
                                        <input type="text" className={ styles['small-input']} /> %
                                        <hr className={ styles['hr-text'] } data-content="And" ></hr>
                                        </div>
                                        <div className={ styles['items-discount']}><span>If you buy Item X</span>
                                        <label>at 3rd time At Discount </label>
                                        <input type="text" className={ styles['small-input']} /> %
                                        <hr className={ styles['hr-text'] }></hr>
                                        </div>
                                        <div className={styles['add-new-box']}>
                                        <a href="#"><i className="fa fa-plus-circle"></i>Add New another Condition</a>
                                        </div>
                                        <div className={styles['divied-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>Item X is</label>
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
                                            <div className={styles['divied-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to exclude</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>Item X is</label>
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
                        </div>
                    </div>
                    <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }> Save</button>
                </div>
            </div>
        </div>
      );
    }
}
