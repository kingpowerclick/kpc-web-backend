import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb, OrderCustomerDetail } from 'components';

export default class OrderDetailEditDetail extends Component {
  render() {
    const styles = require('./orderDetailEditDetail.scss');

    return (
      <div className="container-fluid">
        <div className="row">
        	<div className={ classNames(styles['order-detail-edit-detail-view']) }>
    	    	<header className={ styles['page-header']}>
    	    		<div className={ styles['page-title']}>
    	        		<h1 className={ styles.header }><strong>Order #88810002386</strong></h1>
                        <Breadcrumb breadcrumb={ "Orders > No.#88810002386" }/>
    	    		</div>
              <OrderCustomerDetail/>
              <div className={ styles['sub-menu']}>
                  <ul>
                    <li><a href="#"><i className="fa fa-chevron-left"></i> Back </a></li>
                    <li><a href="#"><i className="fa fa-refresh"></i> Re-Order </a></li>
                    <li><a href="#"><i className="fa fa-envelope"></i> Resend Email </a></li>
                  </ul>
              </div>
    	    	</header>
                <div className={ styles['order-left-detail']}>
                    <div className={ styles['order-detail-card']}>
                        <div className={ styles['header-delivery']}>
                            <div className={ styles['section-delivery']}>
                                <h4>Delivery</h4>
                            </div>
                        <div className={ styles['delivery-by']}>
                            <ul>
                                <li>Delivery <strong>KERRY Express</strong></li>
                                <li>Status <strong>Shipping</strong></li>
                            </ul>
                        </div>
                        </div>
                    <div className="row">
                    <section className={ styles['wrapper-content']}>
			    			<div className={ styles['table-detail'] }>
			    				<div className={ styles['tab-content'] }>
									<table className="table table-striped">
										<thead>
									    	<tr className={ styles['title-table']}>
                                                <th className={ styles['product-name'] }>Product</th>
                                                <th className={ styles['product-thumbnail'] }></th>
                                                <th className={ styles['product-item-status'] }>Item Status</th>
                                                <th className={ styles['product-original-price'] }>Original Price</th>
                                                <th className={ styles['product-price'] }>Price</th>
                                                <th className={ styles['product-qty'] }>QTY</th>
                                                <th className={ styles['product-sub-total'] }>Subtotal</th>
                                                <th className={ styles['product-tax-amount'] }>Tax Amount</th>
                                                <th className={ styles['product-tax-percent'] }>Tax Percent</th>
                                                <th className={ styles['product-discount-amount'] }>Discount Amount</th>
                                                <th className={ styles['product-status'] }>Status</th>
                                                <th className={ styles['product-action'] }>Action</th>
									    	</tr>
										</thead>
										<tbody>
									    	<tr>
                                                <td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>SULWHASOO First Care Activating Serum EX 90ml SKU: 631405</td>
									    		<td>Ordered</td>
									    		<td>3,185.00 THB</td>
									    		<td>3,185.00 THB
                                                    <div className="checkbox"><label><input type="checkbox">CustomPrice*</input></label>
                                                    <input type="text" disabled></input>
                                                </div>

                                                </td>
									    		<td>1</td>
									    		<td>3,185.00 THB</td>
									    		<td>0.00 THB</td>
									    		<td>0.00 THB</td>
									    		<td>318.50 THB</td>
                                                <td>Pending</td>
                                                <td className={ styles['del-action'] }><a href="#"><i className="fa fa-times-circle"></i> Delete </a></td>
									    	</tr>
                                            <tr>
                                                <td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>SULWHASOO First Care Activating Serum EX 90ml SKU: 631405</td>
									    		<td>Ordered</td>
									    		<td>3,185.00 THB</td>
									    		<td>3,185.00 THB</td>
									    		<td>1</td>
									    		<td>3,185.00 THB</td>
									    		<td>0.00 THB</td>
									    		<td>0.00 THB</td>
									    		<td>318.50 THB</td>
                                                <td>Pending</td>
                                                <td className={ styles['del-action'] }><a href="#"><i className="fa fa-times-circle"></i> Delete </a></td>
									    	</tr>
										</tbody>
									</table>
								</div>
			    			</div>
			    	</section>
                </div>
                <div className={ styles['header-delivery']}>
                    <div className={ styles['section-delivery']}>
                        <h4>Pick up</h4>
                    </div>
                <div className={ styles['status-delivery']}>
                    <ul>
                        <li>Status <strong>Shipping</strong></li>
                    </ul>
                </div>
                </div>
                    <div className="row">
                    <section className={ styles['wrapper-content']}>
			    			<div className={ styles['table-detail'] }>
			    				<div className={ styles['tab-content'] }>
									<table className="table table-striped">
										<thead>
                                            <tr className={ styles['title-table']}>
                                                <th className={ styles['product-name'] }>Product</th>
                                                <th className={ styles['product-thumbnail'] }></th>
                                                <th className={ styles['product-item-status'] }>Item Status</th>
                                                <th className={ styles['product-original-price'] }>Original Price</th>
                                                <th className={ styles['product-price'] }>Price</th>
                                                <th className={ styles['product-qty'] }>QTY</th>
                                                <th className={ styles['product-sub-total'] }>Subtotal</th>
                                                <th className={ styles['product-tax-amount'] }>Tax Amount</th>
                                                <th className={ styles['product-tax-percent'] }>Tax Percent</th>
                                                <th className={ styles['product-discount-amount'] }>Discount Amount</th>
                                                <th className={ styles['product-status'] }>Status</th>
                                                <th className={ styles['product-action'] }>Action</th>
									    	</tr>
										</thead>
										<tbody>
                                            <tr>
                                                <td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>SULWHASOO First Care Activating Serum EX 90ml SKU: 631405</td>
									    		<td>Ordered</td>
									    		<td>3,185.00 THB</td>
									    		<td>3,185.00 THB</td>
									    		<td>1</td>
									    		<td>3,185.00 THB</td>
									    		<td>0.00 THB</td>
									    		<td>0.00 THB</td>
									    		<td>318.50 THB</td>
                                                <td>Pending</td>
                                                <td className={ styles['del-action'] }><a href="#"><i className="fa fa-times-circle"></i> Delete </a></td>
									    	</tr>
										</tbody>
									</table>
								</div>
			    			</div>
                            <div className={ styles['coupon-code'] }>
                            <label>Apply Coupon Code (only 1 code)</label>
                            <div className={ styles['input-coupon-code'] }>
                                <input type="text"></input>
                                <div className={ classNames(styles['btn-blue'], 'btn') }>Edit</div>
                            </div>
                                <p className={ styles['err-code']}>This code is invalide</p>
                            </div>
			    	</section>
                </div>
                </div>
                <div className={ styles['order-detail-card']}>
                     <div className={ styles['header-delivery']}>
                         <div className={ styles['section-delivery']}>
                             <h4>Campaign</h4>
                         </div>
                     </div>
                     <div className="row">
                     <section className={ classNames(styles['wrapper-content'], 'campaign')}>
 			    			<div className={ styles['table-detail'] }>
 			    				<div className={ styles['tab-content'] }>
 									<table className="table table-striped">
 										<thead>
 									    	<tr className={ styles['title-table']}>
 									    		<th className={ styles['campaign-campaign'] }>Campaign</th>
 									    		<th className={ styles['campaign-promotion'] }>Promotion</th>
 									    		<th className={ styles['campaign-detail'] }>Detail</th>
 									    	</tr>
 										</thead>
 										<tbody>
 									    	<tr>
 									    		<td>Welcome on board</td>
 									    		<td>New Customer Get Free 200 THB (BEAUTY10)</td>
 									    		<td>Discount 200 THB from Net. total when buy order minimum 1,000 THB</td>
 									    	</tr>
 									    	<tr>
 									    		<td>Brighter face with SULWHASOO</td>
 									    		<td>GWP: Free 1 First Care Activating Serum</td>
 									    		<td>Buy 1 for SULWHASOO First Care Activating Serum EX 90ml SKU: 631405
Free 1 SULWHASOO First Care Activating Serum EX 90ml SKU: 631405</td>
 									    	</tr>
 										</tbody>
 									</table>
 								</div>
 			    			</div>
 			    	</section>
                 </div>
                 </div>
                 <div className={ styles['order-detail-card']}>
                      <div className={ styles['header-delivery']}>
                          <div className={ styles['section-delivery']}>
                              <h4>Note for this order</h4>
                          </div>
                      </div>
                      <div className="row">
                      <section className={ styles['wrapper-content']}>
                          <div className={ styles['note-detail'] }>
                            <label>Status</label>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default">Action</button>
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="caret"></span>
                                <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                </ul>
                            </div>
                            </div>
                        <div className={ styles['note-detail'] }>
                            <label>Comment</label>
                            <textarea rows="5"></textarea>
                        </div>
                        <div className={ styles['add-comment-to-store-front'] }>
                            <div className={ styles['note-check-visible'] }>
                                <input type="checkbox"></input>
                                <label>Visible this comment on Storefront</label>
                            </div>
                        <div className={ styles['add-comment'] }>
                            <div className={ classNames(styles['btn-blue'], 'btn') }>
                            Add Comment
                            </div>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <hr></hr>
                        <div className={ styles['header-delivery']}>
                            <div className={ styles['section-delivery']}>
                                <h4>History</h4>
                            </div>
                        </div>
                        <div className="row">
                            <section className={ styles['wrapper-content']}>
    			    			<div className={ styles['table-detail'] }>
    			    				<div className={ styles['tab-content'] }>
    									<table className="table table-striped">
    										<thead>
    									    	<tr className={ styles['title-table']}>
    									    		<th className={ styles['history-date'] }>Date</th>
    									    		<th className={ styles['history-time'] }>Time</th>
    									    		<th className={ styles['history-status'] }>Status</th>
    									    		<th className={ styles['history-notified'] }>Notified</th>
    									    		<th className={ styles['history-comment'] }>Comment</th>
    									    	</tr>
    										</thead>
    										<tbody>
    									    	<tr>
    									    		<td>May 11, 2017</td>
    									    		<td> 3:31:12 PM</td>
    									    		<td>Pending Payment</td>
    									    		<td>Yes</td>
    									    		<td>Please pay your order before May 15, 2017.</td>
    									    	</tr>
    									    	<tr>
                                                <td>May 11, 2017</td>
                                                <td> 3:31:12 PM</td>
                                                <td>Ordered</td>
                                                <td>No</td>
                                                <td>Please pay your order before May 15, 2017.</td>
    									    	</tr>
    										</tbody>
    									</table>
    								</div>
    			    			</div>
    			    	</section>
                    </div>
  			    	</section>
                  </div>
                  </div>
            </div>
            <div className={ styles['order-panel']}>
                <div className={ styles['order-panel-card']}>
                    <div className={ styles['order-panel-card-title']}>
                      Order Totals
                    </div>
                    <div className={ styles['order-panel-card-body']}>
                      <div className={ styles['line-divide']}>
                        <div className={ styles['order-topic']}>Subtotal </div>
                        <div className={ styles['order-detail']}>9,645.00 THB</div>
                      </div>
                      <div className={ styles['line-divide']}>
                        <div className={ styles['order-topic']}>Shipping & Handling </div>
                        <div className={ styles['order-detail']}>0.00 THB</div>
                      </div>
                      <div className={ styles['line-divide']}>
                        <div className={ styles['order-topic']}>Discount (BEAUTY10) </div>
                        <div className={ styles['order-detail']}>-9645.50 THB</div>
                      </div>
                     <div className="clearfix"></div>
                     <div className={ styles['customer-detail']}>
                       <div className={ styles['order-topic']}>Grand Total</div>
                       <div className={ styles['order-detail']}>1,122.00 THB</div>
                     </div>
                     <div className={ styles['customer-detail']}>
                       <div className={ styles['order-topic']}>Total Paid</div>
                       <div className={ styles['order-detail']}>0.00 THB</div>
                     </div>
                     <div className={ styles['customer-detail']}>
                       <div className={ styles['order-topic']}>Total Refunded</div>
                       <div className={ styles['order-detail']}>0.00 THB</div>
                     </div>
                     <div className={ styles['customer-detail']}>
                       <div className={ styles['order-topic']}>Total Due</div>
                       <div className={ styles['order-detail']}>1,122.00 THB</div>
                     </div>
                     </div>
              </div>
                <div className={ styles['order-panel-card']}>
                    <div className={ styles['order-panel-card-title']}>
                      Flight Infomation
                    </div>
                    <div className={ styles['order-panel-card-body']}>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>First Name <span className={ styles['required-field']}>*</span></label>
                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>Passport ID <span className={ styles['required-field']}>*</span></label>
                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>Phone <span className={ styles['required-field']}>*</span></label>
                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>PU Code <span className={ styles['required-field']}>*</span></label>
                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>PU Name <span className={ styles['required-field']}>*</span></label>
                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>Airline Flight <span className={ styles['required-field']}>*</span></label>
                            <div className={ styles['btn-group']}>
                                <button type="button" className={ classNames(styles['btn-dropdown'], 'btn', 'btn-default') }>Airline Flight</button>
                                <button type="button" className={ classNames(styles['btn-caret'], 'btn', 'btn-default', 'dropdown-toggle' ) } data-toggle="dropdown">
                                <span className="caret"></span>
                                <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>Flight No. <span className={ styles['required-field']}>*</span></label>
                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                        </div>
                        <div className={ styles['form-group']}>
                            <label className={ styles['control-label']}>Flight date and time</label>
                            <div className="row">
                                <input type="text" className={ classNames(styles['input-form-50'], 'form-control') }></input>
                                <input type="text" className={ classNames(styles['input-form-50'], 'form-control') }></input>
                            </div>
                        </div>
                        <div className={ styles['form-group']}>
                            <div className={ classNames(styles['btn-blue'], 'btn') }>
                            Update Flight
                            </div>
                        </div>
                     </div>
                   </div>
                   <div className={ styles['order-panel-card']}>
                       <div className={ styles['order-panel-card-title']}>
                        Payment
                       </div>
                       <div className={ styles['order-panel-card-body']}>
                        <div className={ styles['customer-detail']}>
                          <div className={ styles['order-topic']}>Re-Order</div>
                          <div className={ styles['order-detail']}>VISA / MASTER Card</div>
                        </div>
                        <div className={ styles['customer-detail']}>
                          <div className={ styles['order-topic']}>Issuin Bank</div>
                          <div className={ styles['order-detail']}>Bangkok Bank</div>
                        </div>
                        </div>
                    </div>
                    <div className={ styles['order-panel-card']}>
                        <div className={ styles['order-panel-card-title']}>
                          Billing Address
                        </div>
                        <div className={ styles['order-panel-card-body']}>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>Select from existing customer addresses</label>
                                <div className={ styles['btn-group']}>
                                    <button type="button" className={ classNames(styles['btn-dropdown'], 'btn', 'btn-default') }>Add new Address</button>
                                    <button type="button" className={ classNames(styles['btn-caret'], 'btn', 'btn-default', 'dropdown-toggle' ) } data-toggle="dropdown">
                                    <span className="caret"></span>
                                    <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>Prefix <span className={ styles['required-field']}>*</span></label>
                                <div className={ styles['btn-group']}>
                                    <button type="button" className={ classNames(styles['btn-dropdown'], 'btn', 'btn-default') }>Mr.</button>
                                    <button type="button" className={ classNames(styles['btn-caret'], 'btn', 'btn-default', 'dropdown-toggle' ) } data-toggle="dropdown">
                                    <span className="caret"></span>
                                    <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>First Name <span className={ styles['required-field']}>*</span></label>
                                <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>Last Name <span className={ styles['required-field']}>*</span></label>
                                <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>Phone Number <span className={ styles['required-field']}>*</span></label>
                                <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>Street Address <span className={ styles['required-field']}>*</span></label>
                                <textarea rows="5"></textarea>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>Country <span className={ styles['required-field']}>*</span></label>
                                <div className={ styles['btn-group']}>
                                    <button type="button" className={ classNames(styles['btn-dropdown'], 'btn', 'btn-default') }>Thailand</button>
                                    <button type="button" className={ classNames(styles['btn-caret'], 'btn', 'btn-default', 'dropdown-toggle' ) } data-toggle="dropdown">
                                    <span className="caret"></span>
                                    <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>State/Province <span className={ styles['required-field']}>*</span></label>
                                <div className={ styles['btn-group']}>
                                    <button type="button" className={ classNames(styles['btn-dropdown'], 'btn', 'btn-default') }>Bangkok</button>
                                    <button type="button" className={ classNames(styles['btn-caret'], 'btn', 'btn-default', 'dropdown-toggle' ) } data-toggle="dropdown">
                                    <span className="caret"></span>
                                    <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ styles['form-group']}>
                                <label className={ styles['control-label']}>ZIP Code</label>
                                <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                            </div>
                            <div className={ styles['form-group']}>
                                <div className={ styles['note-check-visible'] }>
                                    <input type="checkbox"></input>
                                    <label>Save in address book</label>
                                </div>
                            </div>
                         </div>
                       </div>
                </div>
            </div>
          </div>
      	</div>
		);
  }
}
