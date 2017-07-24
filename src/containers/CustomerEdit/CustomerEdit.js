import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { FilterPage, Breadcrumb, CustomerDetail } from 'components';
import { Tabs, Tab, Collapse } from 'react-bootstrap';

export default class CustomerEdit extends Component {
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
                                                <form className="form-horizontal">
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Passport No.</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="420601197409120000" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Citizen ID</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="420601197409120000" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Member ID</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="420601197409120000" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Emboss ID</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="420601197409120000" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Phone</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="420601197409120000" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Cuatomer Level</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <select className="form-control">
                                                                <option value="">a</option>
                                                                <option value="">b</option>
                                                                <option value="">c</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Contact with Facebook</div>
                                                        <div className={ styles['infomation-detail'] }>420601197409120000</div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Contact with Google</div>
                                                        <div className={ styles['infomation-detail'] }>420601197409120000</div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className={ styles['personal-detail-right'] }>
                                                <form className="form-horizontal">
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Name</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="MR. Sarannuth Chanluang" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Email</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="email" className="form-control" value="080525.shiningshinee@gmail.com" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Date of Birth</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <input type="text" className="form-control" value="11/16/1995" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Nationality</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <select className="form-control">
                                                                <option value="">a</option>
                                                                <option value="">b</option>
                                                                <option value="">c</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ classNames( styles['detail-label'], 'control-label') } >Send Welcome Email For Launguage</div>
                                                        <div className={ styles['infomation-detail'] }>
                                                            <select className="form-control">
                                                                <option value="">a</option>
                                                                <option value="">b</option>
                                                                <option value="">c</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className={ styles['infomation-detail'] }>
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" /> Subscribed to Newsletter
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className={ styles['personal-detail-mid'] }>
                                                <button className={ classNames('btn btn-default', styles['btn-blue']) }>save</button>
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
                                                    Default Billing Address
                                                </div>
                                                <div className={ styles['panel-collapse'] } >
                                                    <form className="form-horizontal">
                                                        <div className="form-group">
                                                            <div className={ classNames( styles['detail-label'], 'control-label') } >Select from added address</div>
                                                            <div className={ styles['infomation-detail'] }>
                                                                <select className="form-control">
                                                                    <option value="">a</option>
                                                                    <option value="">b</option>
                                                                    <option value="">c</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="row">
                                                        <div className={ styles['personal-detail-left'] }>
                                                            <form className="form-horizontal">
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >Title</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <input type="text" className="form-control" value="MR." />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >First Name</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <input type="text" className="form-control" value="Sarannuth" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >Last Name</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <input type="text" className="form-control" value="Chanluang" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >Phone Number</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <input type="text" className="form-control" value="894575507" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >VAT Number</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <input type="text" className="form-control" value="-" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className={ styles['personal-detail-right'] }>
                                                            <form className="form-horizontal">
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >Street Address</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <textarea className="form-control" rows="3">
                                                                            58/7 Soi Thewet 1, Krungkasem rd.
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >Country</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <select className="form-control">
                                                                            <option value="">Thailand</option>
                                                                            <option value="">b</option>
                                                                            <option value="">c</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >State/Province</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <select className="form-control">
                                                                            <option value="">a</option>
                                                                            <option value="">b</option>
                                                                            <option value="">c</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className={ classNames( styles['detail-label'], 'control-label') } >Zip/Postal Code</div>
                                                                    <div className={ styles['infomation-detail'] }>
                                                                        <input type="text" className="form-control" value="10230" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className={ styles['personal-detail-mid'] }>
                                                            <button className={ classNames('btn btn-default', styles['btn-blue']) }>Save Address</button>
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
