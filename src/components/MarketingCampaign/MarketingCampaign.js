// import React, {Component, PropTypes} from 'react';
import React, {Component} from 'react';
import classNames from 'classnames';

export default class MarketingCampaign extends Component {
  render() {
    const styles = require('./marketingCampaign.scss');
    return (
      <div className={ styles['tab-content'] }>
        <table className="table table-striped">
            <thead>
                <tr className={ styles['title-table']}>
                    <th className={ styles['product-checkbox'] }><input type="checkbox"/></th>
                    <th className={ styles['product-id'] }>Id</th>
                    <th className={ styles['product-name'] }>Name</th>
                    <th className={ styles['product-description'] }>Description</th>
                    <th className={ styles['product-code'] }>Code</th>
                    <th className={ styles['product-usage'] }>Usage</th>
                    <th className={ styles['product-date'] }>Date</th>
                    <th className={ styles['product-time'] }>Time</th>
                    <th className={ styles['product-during-time'] }>During Time</th>
                    <th className={ styles['product-day'] }>Day</th>
                    <th className={ styles['product-priority'] }>Priority</th>
                    <th className={ styles['product-status'] }>Status</th>
                    <th className={ styles['product-edit'] }></th>
                    <th className={ styles['product-view'] }></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>1</td>
                    <td>Back to democracy</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                    <td>
                        <ul className={ styles['code-list']}>
                            <li>SO1120</li>
                        </ul>
                    </td>
                    <td>100/1000</td>
                    <td>
                        <div className={ styles['start-date'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="12/05/2016" />
                            </div>
                        </div>
                        <div className={ styles['end-date'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="12/05/2016" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={ styles['start-time'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                        <div className={ styles['end-time'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={ styles['start-time'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                        <div className={ styles['end-time'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                    </td>
                    <td>SUN,MON, TUE,THU</td>
                    <td>01</td>
                    <td>
                        <div className={ styles['filter-action']}>
                            <div className="btn-group">
                                <button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
                                <button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
                                    <span className="caret"></span>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td><a href="#">Edit</a></td>
                    <td><a href="#">View</a></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>2</td>
                    <td>Back to democracy</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                    <td>
                        <ul className={ styles['code-list']}>
                            <li>SO1120</li>
                            <li>SCB0023</li>
                            <li>GAVOGAV</li>
                            <li>TMB003 </li>
                        </ul>
                    </td>
                    <td>100/1000</td>
                    <td>
                        <div className={ styles['start-date'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="12/05/2016" />
                            </div>
                        </div>
                        <div className={ styles['end-date'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="12/05/2016" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={ styles['start-time'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                        <div className={ styles['end-time'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={ styles['start-time'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                        <div className={ styles['end-time'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                    </td>
                    <td>SUN,MON, TUE,THU</td>
                    <td>01</td>
                    <td>
                        <div className={ styles['filter-action']}>
                            <div className="btn-group">
                                <button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
                                <button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
                                    <span className="caret"></span>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td><a href="#">Edit</a></td>
                    <td><a href="#">View</a></td>
                </tr><tr>
                    <td><input type="checkbox"/></td>
                    <td>3</td>
                    <td>Back to democracy</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                    <td>
                        <ul className={ styles['code-list']}>
                            <li>SO1120</li>
                        </ul>
                    </td>
                    <td>100/1000</td>
                    <td>
                        <div className={ styles['start-date'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="12/05/2016" />
                            </div>
                        </div>
                        <div className={ styles['end-date'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="12/05/2016" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={ styles['start-time'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                        <div className={ styles['end-time'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={ styles['start-time'] }>
                            <div className={ styles.text }>Start</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                        <div className={ styles['end-time'] }>
                            <div className={ styles.text }>End</div>
                            <div className={ styles.input }>
                                <input type="text" placeholder="4:00PM" />
                            </div>
                        </div>
                    </td>
                    <td>SUN,MON, TUE,THU</td>
                    <td>01</td>
                    <td>
                        <div className={ styles['filter-action']}>
                            <div className="btn-group">
                                <button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
                                <button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
                                    <span className="caret"></span>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td><a href="#">Edit</a></td>
                    <td><a href="#">View</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}
