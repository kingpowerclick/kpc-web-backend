import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { FilterPage, Breadcrumb, CustomerDetail } from 'components';

export default class CustomerOrder extends Component {
  render() {
    const styles = require('./customerOrder.scss');
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
                        </div>
			    	</header>
			    	<section className={ styles['wrapper-content']}>
			    		<div className={ styles.content}>
			    			<div className={ styles['wrapper-customer-order-tab']}>
								<ul className="nav nav-tabs">
								 	<li role="presentation" className={ classNames(styles['customer-order-tab'])}><a href="#">Information</a></li>
								 	<li role="presentation" className={ classNames(styles['customer-order-tab'], styles['tab-active'], 'active')}><a href="#">Order History</a></li>
								</ul>
			    			</div>
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
			    	</section>
		    	</div>
    		</div>
    	</div>
	);
  }
}
