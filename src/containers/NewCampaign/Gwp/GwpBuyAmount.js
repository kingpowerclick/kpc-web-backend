import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb, NewCampaginMenu } from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class GwpBuyAmount extends Component {
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
                    <div className={ styles['panel-left'] }>
                        <NewCampaginMenu subMenu= { `Gwpa` } mainMenu={ `Gwp` }/>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Buy amount XXX baht GET GWP</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
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
                                        <span><strong>Buy amount</strong></span>
                                        <label><input type="text" className="form-control"/></label>
                                        <span><strong> THB And </strong>Get <strong> GWP</strong></span>
                                        <div className={styles['border-bottom-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Calculate by</label>
                                </div>
                                <div className={ classNames(styles['control-optional']) }>
                                    <div className={styles['content-option']}>
                                        <div className={styles['control-on-off']}>
                                            <label className="radio-inline"><input type="radio">Net Revenues</input></label>
                                            <label className="radio-inline"><input type="radio">Gross Revenues</input></label>
                                        </div>
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
                                        <label>GWP is</label>
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
                                    <label className={styles['control-label']}>GWP is </label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>by SKU :  --</li>
                                        </ul>
                                        <div className={styles['border-bottom-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Quantity </label>
                                </div>
                                <div className={ classNames(styles['control-optional']) }>
                                    <div className={styles['content-option']}>
                                        <span><strong>QTY of GWP is</strong></span>
                                        <label><input type="text" className="form-control"/></label>
                                        <div className={styles['border-bottom-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Set Priroty </label>
                                </div>
                                <div className={ classNames(styles['control-optional']) }>
                                    <div className={styles['content-option']}>
                                        <label><input type="text" className="form-control"/></label>
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
