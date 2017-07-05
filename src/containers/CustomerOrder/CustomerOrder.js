import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { FilterPage, Breadcrumb, CustomerDetail } from 'components';
import { Tabs, Tab, Collapse } from 'react-bootstrap';

export default class CustomerOrder extends Component {
    constructor(...args) {
      super(...args);
      this.state = {};
    }

  render() {
    const styles = require('./customerOrder.scss');
    const avatar = require('./avatar.png');
    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['customer-order-view']) }>
			    	<header className={ styles['page-header'] }>
			    		<div className={ styles['page-title'] }>
			        		<h1 className={ styles.header }>Mr Sarannuth Chanluang</h1>
                            <Breadcrumb breadcrumb={ "Customer > Mr Sarannuth Chanluang" }/>
			    		</div>
                        <CustomerDetail/>
                        <div className={ styles.back }>
                            <Link to={`/orders`}> <i className="fa fa-chevron-left"></i> Back </Link>
                            <div className={ styles['sub-breadcrumb'] }>|</div>
                            <a href="#"> <i className="fa fa-refresh"></i> Reset Password </a>
                            <div className={ styles['sub-breadcrumb'] }>|</div>
                            <a href="#"> <i className="fa fa-unlock"></i> Unlock User </a>
                        </div>
			    	</header>
			    	<section className={ styles['wrapper-content']}>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Information">
                                <div id="customer-order-tab-infomation" className={ styles['customer-order-tab-infomation'] }>
                                    <div className={ classNames(styles['my-personal-detail'], 'row')}>
                                        <div className={ styles['customer-title'] }>My Personal Detail</div>
                                        <div className={ styles['personal-avatar'] }>
                                            <div className="row">
                                                <div className={ styles.avatar }>
                                                    <img src={ avatar } className={ styles['avatar-image']} />
                                                </div>
                                                <div className={ styles['avatar-name'] }>
                                                    <div className={ styles['customer-title'] }>Mr Sarannuth Chanluang</div>
                                                    My Personal Detail
                                                </div>
                                            </div>
                                        </div>
                                        <div className={ styles['personal-detail'] }>
                                            <div className={ styles['personal-detail-left'] }>
                                                <div className={ styles['detail-group'] }>Passport No.<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Citizen ID<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Member ID<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Emboss ID<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Phone<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Cuatomer Level<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Contact with Facebook<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                                <div className={ styles['detail-group'] }>Contact with Google<span className={ styles['infomation-detail'] }>420601197409120000</span></div>
                                            </div>
                                            <div className={ styles['personal-detail-right'] }>
                                                <div className={ styles['detail-group'] }>Name<span className={ styles['infomation-detail'] }>MR. Sarannuth Chanluang</span></div>
                                                <div className={ styles['detail-group'] }>Email<span className={ styles['infomation-detail'] }>080525.shiningshinee@gmail.com</span></div>
                                                <div className={ styles['detail-group'] }>Date of Birth<span className={ styles['infomation-detail'] }>11/16/1995</span></div>
                                                <div className={ styles['detail-group'] }>Nationality<span className={ styles['infomation-detail'] }>Thai</span></div>
                                                <div className={ styles['detail-group'] }>Send Welcome Email For Launguage<span className={ styles['infomation-detail'] }>Thai</span></div>
                                                <div className={ styles['detail-group'] }>Subscribed to Newsletter<span className={ styles['infomation-detail'] }>Yes</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ classNames(styles['personal-address'], 'row') }>
                                        <div className={ classNames(styles['customer-title'], styles['customer-title-address']) }>Address</div>
                                        <div className={ styles['select-address'] }>
                                            <div className={ classNames(styles['panel-default'], 'panel') }>
                                                <div className={ classNames(styles['panel-body'], styles['personal-address-title']) } onClick={ ()=> this.setState({ open: !this.state.open }) }>
                                                    Default Billing Address
                                                </div>
                                                <Collapse className={ styles['panel-collapse'] } in={ !this.state.open }>
                                                    <div className={styles['personal-address-detail']}>
                                                        <div className={ styles['personal-address-detail-name'] }>Mr Sarannuth Chanluang </div>
                                                        <div className={ styles['personal-address-detail-address'] }>
                                                            58/7 Soi Thewet 1, Krungkasem rd.
                                                            Phranakorn, Bangkok, 10200
                                                            Thailand
                                                            T: 894575507
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className={ classNames(styles['panel-default'], 'panel') }>
                                                <div className={ classNames(styles['panel-body'], styles['personal-address-title']) } onClick={ ()=> this.setState({ open: !this.state.open }) }>
                                                    Default Shipping Address
                                                </div>
                                                <Collapse className={ styles['panel-collapse'] } in={ !this.state.open }>
                                                    <div className={styles['personal-address-detail']}>
                                                        <div className={ styles['personal-address-detail-name'] }>Mr Sarannuth Chanluang </div>
                                                        <div className={ styles['personal-address-detail-address'] }>
                                                            58/7 Soi Thewet 1, Krungkasem rd.
                                                            Phranakorn, Bangkok, 10200
                                                            Thailand
                                                            T: 894575507
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className={ classNames(styles['panel-default'], 'panel') }>
                                                <div className={ classNames(styles['panel-body'], styles['personal-address-title']) } onClick={ ()=> this.setState({ open: !this.state.open }) }>
                                                    Other Address
                                                </div>
                                                <Collapse className={ styles['panel-collapse'] } in={ !this.state.open }>
                                                    <div className={styles['personal-address-detail']}>
                                                        <div className={ styles['personal-address-detail-name'] }>Mr Sarannuth Chanluang </div>
                                                        <div className={ styles['personal-address-detail-address'] }>
                                                            58/7 Soi Thewet 1, Krungkasem rd.
                                                            Phranakorn, Bangkok, 10200
                                                            Thailand
                                                            T: 894575507
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                        <div className={ styles['address-info'] }>
                                            <div className={ classNames(styles['panel-default'], 'panel') }>
                                                <div className={ classNames(styles['panel-body'], styles['personal-address-title']) } >
                                                    Other Address
                                                </div>
                                                <div className={ styles['panel-collapse'] } >
                                                    <div className="row">
                                                        <div className={ styles['personal-detail-left'] }>
                                                            <div className={ styles['detail-group'] }>Name<span className={ styles['infomation-detail'] }>MR. Sarannuth Chanluang</span></div>
                                                            <div className={ styles['detail-group'] }>Phone Number<span className={ styles['infomation-detail'] }>894575507</span></div>
                                                            <div className={ styles['detail-group'] }>VAT number<span className={ styles['infomation-detail'] }>-</span></div>
                                                        </div>
                                                        <div className={ styles['personal-detail-right'] }>
                                                            <div className={ styles['detail-group'] }>Street Address<span className={ styles['infomation-detail'] }>58/7 Soi Thewet 1, Krungkasem rd.</span></div>
                                                            <div className={ styles['detail-group'] }>Country<span className={ styles['infomation-detail'] }>Thailand</span></div>
                                                            <div className={ styles['detail-group'] }>State/Province<span className={ styles['infomation-detail'] }>-</span></div>
                                                            <div className={ styles['detail-group'] }>Zip/Postal Code<span className={ styles['infomation-detail'] }>10230</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="Order History">
                                <div id="customer-order-tab-history">
        			    			<div className={ classNames(styles['filter-customer-order'])}>
        			    				<div className={ classNames(styles['wrapper-filter'])}>
                                            <div className={ styles['customer-order-title'] }>Order History</div>
        			    					<div className={ styles['filter-left']}>
        				    					<div className={ styles['filter-radio']}>
                                                    <div className="radio">
                                                      <label>
                                                          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />Complete Order
                                                      </label>
                                                      <label>
                                                          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Return Order
                                                      </label>
                                                    </div>
        				    					</div>
        			    					</div>
        			    					<div className={ classNames(styles['filter-right']) }>
        				    					<FilterPage/>
        			    					</div>
        			    				</div>
        			    			</div>
        			    			<div className={ styles['table-detail'] }>
        			    				<div className={ styles['tab-content'] }>
        									<table className="table table-striped">
        										<thead>
        									    	<tr className={ styles['title-table']}>
        									    		<th className={ styles['order-no'] }>Order No.</th>
        									    		<th className={ styles['order-date'] }>Order Date</th>
        									    		<th className={ styles['ship-to-name'] }>Ship-to-name</th>
        									    		<th className={ styles['order-total'] }>Order Total</th>
        									    		<th className={ styles['order-status'] }>Order Status</th>
        									    	</tr>
        										</thead>
        										<tbody>
        									    	<tr>
        									    		<td>503576</td>
        									    		<td>May 08, 2017, 16:05:00 PM</td>
        									    		<td>จิรพร พริกบางเข็ม</td>
        									    		<td>14,590.00 THB</td>
        									    		<td>Packing</td>
        									    	</tr>
                                                    <tr>
        									    		<td>503576</td>
        									    		<td>May 08, 2017, 16:05:00 PM</td>
        									    		<td>จิรพร พริกบางเข็ม</td>
        									    		<td>14,590.00 THB</td>
        									    		<td>Packing</td>
        									    	</tr>
                                                    <tr>
        									    		<td>503576</td>
        									    		<td>May 08, 2017, 16:05:00 PM</td>
        									    		<td>จิรพร พริกบางเข็ม</td>
        									    		<td>14,590.00 THB</td>
        									    		<td>Packing</td>
        									    	</tr>
                                                    <tr>
        									    		<td>503576</td>
        									    		<td>May 08, 2017, 16:05:00 PM</td>
        									    		<td>จิรพร พริกบางเข็ม</td>
        									    		<td>14,590.00 THB</td>
        									    		<td>Packing</td>
        									    	</tr>
                                                    <tr>
        									    		<td>503576</td>
        									    		<td>May 08, 2017, 16:05:00 PM</td>
        									    		<td>จิรพร พริกบางเข็ม</td>
        									    		<td>14,590.00 THB</td>
        									    		<td>Packing</td>
        									    	</tr>
                                                    <tr>
        									    		<td>503576</td>
        									    		<td>May 08, 2017, 16:05:00 PM</td>
        									    		<td>จิรพร พริกบางเข็ม</td>
        									    		<td>14,590.00 THB</td>
        									    		<td>Packing</td>
        									    	</tr>
        										</tbody>
        									</table>
        								</div>
        								<div className={ classNames(styles['filter-bottom'])}>
        									<FilterPage/>
        								</div>
        			    			</div>
                                </div>
                            </Tab>
                        </Tabs>
			    	</section>
		    	</div>
    		</div>
    	</div>
	);
  }
}
