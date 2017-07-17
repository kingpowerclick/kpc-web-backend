import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb, NewCampaginMenu} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class AddNewCampaignPercentDiscount extends Component {
    render() {
      const styles = require('./addNewCampaignPercentDiscount.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['percent-discount-view']) }>
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
                        <NewCampaginMenu subMenu= { `Amounta` } mainMenu={ `Amount` }/>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Get Discount percent off</p>
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
                                        <label>Get Discount</label>
                                        <label>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <label>%</label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>Product is a</label>
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
                                            <li>by Category :
                                                <ul className={styles['bubble-tag']}>
                                                    <li className={styles['bubble-tag-list']}>Beauty/Skincare <i className="fa fa-times-circle"></i></li>
                                                    <li className={styles['bubble-tag-list']}>Home&Kitchen/Cooking/Pot <i className="fa fa-times-circle"></i></li>
                                                    <li className={styles['bubble-tag-list']}>Home&Kitchen/Living/Cleaning/Wipes <i className="fa fa-times-circle"></i></li>
                                                </ul>
                                            </li>
                                            <li>by Brand : <ul className={styles['bubble-tag']}>
                                                <li className={styles['bubble-tag-list']}>ALIZ PAULIN <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>ALLOCACOC <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>AMBER <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>ANESSA <i className="fa fa-times-circle"></i></li>
                                            </ul></li>
                                            <li>by SKU : <ul className={styles['bubble-tag']}>
                                                <li className={styles['bubble-tag-list']}>123 <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>2223423 <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>1122 <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>3566 <i className="fa fa-times-circle"></i></li>
                                            </ul></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>Product is </label>
                                            <label>
                                                <SplitButton title="none" pullRight id="split-button-pull-right">
                                                    <MenuItem eventKey="1">Action</MenuItem>
                                                    <MenuItem eventKey="2">Another action</MenuItem>
                                                    <MenuItem eventKey="3">Something else here</MenuItem>
                                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                                </SplitButton>
                                            </label>
                                        </div>
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
                                <a href="#"><i className="fa fa fa-times-circle"></i>Delete this Condition</a>
                            </div>
                            <div className={styles['divied-blue']}></div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Set Condition</label>
                                </div>
                                <div className={ classNames(styles['control-optional'], styles['top-border'])}>
                                    <div className={styles['content-option']}>
                                        <label>Get Discount</label>
                                        <label>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <label>%</label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <label>Product is a</label>
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
                                            <li>by Category :
                                                <ul className={styles['bubble-tag']}>
                                                    <li className={styles['bubble-tag-list']}>Beauty/Skincare <i className="fa fa-times-circle"></i></li>
                                                    <li className={styles['bubble-tag-list']}>Home&Kitchen/Cooking/Pot <i className="fa fa-times-circle"></i></li>
                                                    <li className={styles['bubble-tag-list']}>Home&Kitchen/Living/Cleaning/Wipes <i className="fa fa-times-circle"></i></li>
                                                </ul>
                                            </li>
                                            <li>by Brand : <ul className={styles['bubble-tag']}>
                                                <li className={styles['bubble-tag-list']}>ALIZ PAULIN <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>ALLOCACOC <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>AMBER <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>ANESSA <i className="fa fa-times-circle"></i></li>
                                            </ul></li>
                                            <li>by SKU : <ul className={styles['bubble-tag']}>
                                                <li className={styles['bubble-tag-list']}>123 <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>2223423 <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>1122 <i className="fa fa-times-circle"></i></li>
                                                <li className={styles['bubble-tag-list']}>3566 <i className="fa fa-times-circle"></i></li>
                                            </ul></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>Product is </label>
                                            <label>
                                                <SplitButton title="none" pullRight id="split-button-pull-right">
                                                    <MenuItem eventKey="1">Action</MenuItem>
                                                    <MenuItem eventKey="2">Another action</MenuItem>
                                                    <MenuItem eventKey="3">Something else here</MenuItem>
                                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                                </SplitButton>
                                            </label>
                                        </div>
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
                                <a href="#"><i className="fa fa-plus-circle"></i>Add New another Condition Condition</a>
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
