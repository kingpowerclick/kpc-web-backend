import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb, TablePromoCode } from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class MarketingCampaignInfo extends Component {
    render() {
      const styles = require('./marketingCampaignInfo.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['marketing-campaign-info-view']) }>
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
                            <p className={styles['list-menu']}>- GWP (0)</p>
                            <p className={styles['list-menu']}>- Shipping Fee (0)</p>
                            <p className={styles['list-menu']}>- End of the Bill Discount (0)</p>
                        </div>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Campaign Info</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Campaign name</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <label className={styles['input-descripton']}>English* (It will default if you didn’t set for other language)</label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Description</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <textarea rows="5"></textarea>
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
                                    <label className={styles['control-label']}>T&C of promotion use</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <textarea rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Schedule</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Start date</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={ classNames(styles['content-option'], styles['option-date'])}>
                                        <label>
                                            <input type="text" className="form-control" placeholder="12/05/2016"/>
                                        </label>
                                        <label className={ styles['at-date']}>At</label>
                                        <label>
                                            <input type="text" className="form-control" placeholder="4:00PM"/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>End date</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={ classNames(styles['content-option'], styles['option-date'])}>
                                        <label>
                                            <input type="text" className="form-control" placeholder="12/05/2016"/>
                                        </label>
                                        <label className={ styles['at-date']}>At</label>
                                        <label>
                                            <input type="text" className="form-control" placeholder="4:00PM"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Promo Code</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>discount code Specification</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label>
                                            <form className={styles['radio-promocode']}>
                                                <input type="radio" name="gender" value="1"/>Generate generic Promo Code<br/>
                                                <input type="radio" name="gender" value="2"/>Generate unique Promo Code
                                            </form>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles['schdule-setting']}>
                                    <div><a href="#"><i className="fa fa-angle-down"></i>Advance Schdule Setting</a></div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Promo Code</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['promo-code']}>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <div className={styles['add-promo']}>
                                            <div><a><i className="fa fa-plus-circle"></i></a></div>
                                            <div className={styles['border-add-promo']}></div>
                                            <div><a><i className="fa fa-upload"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['export-promo-code']}>
                                    <div className={styles['export-header']}>
                                        <div className={styles['export-to']}>
                                            <span className={styles['export-text']}>Export to</span>
                                            <SplitButton title="none" pullRight id="split-button-pull-right">
                                                <MenuItem eventKey="1">Action</MenuItem>
                                                <MenuItem eventKey="2">Another action</MenuItem>
                                                <MenuItem eventKey="3">Something else here</MenuItem>
                                                <MenuItem eventKey="4">Separated link</MenuItem>
                                            </SplitButton>
                                        </div>
                                        <div className={styles['btn-export']}>
                                            <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }>Export</button>
                                        </div>
                                       	<div className={ styles['filter-pagination']}>
                                            <nav aria-label="Page navigation">
                                                <ul className={ classNames(styles['pagination-ul'], 'pagination')}>
                                                    <li>
                                                        <a href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </a>
                                                    </li>
                                                    <li><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li>
                                                        <a href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div>
                                    <TablePromoCode/>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Promo Code  QTY</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['promo-code']}>
                                            <input type="text" className="form-control"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Promo Code  Used</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['promo-code']}>
                                            --
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Campaign limitation</p>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Limited usage per time</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['limit-time']}>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <span className={ styles.time}>times</span>
                                        <span className={ styles['eg-time']}>(e.g. 10 times)</span>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Limited usage per user</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['limit-time']}>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <span className={ styles.time}>times</span>
                                        <span className={ styles['eg-time']}>(e.g. 1 time per user or xxx times per user)</span>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Mininum purchase amount for activate this campaign</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['limit-time']}>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <span className={ styles.time}>THB</span>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Set Priority</label>
                                </div>
                                <div className={ classNames(styles['control-optional'])}>
                                    <div className={styles['content-option']}>
                                        <label className={ styles['limit-time']}>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <span className={ styles['eg-time']}> The Most priority is 0 and 99 is least priority.</span>
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
