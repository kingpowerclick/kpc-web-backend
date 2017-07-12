import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		Breadcrumb } from 'components';


export default class MasterBrandAndMember extends Component {

  render() {
    const styles = require('./masterBrandAndMember.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['master-brand-and-member-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Brand and Member Discount Limitation</strong></h1>
							<Breadcrumb breadcrumb={ "Marketing" }/>
			    		</div>
			    		<div className={ styles['page-filter']}>
							<ul className={ styles['list-filter']}>
								<li className={ classNames( styles.filter, styles['add-product'])}>
									<div className={ classNames( styles['add-product-dropdown'], 'dropdown' )}>
										<div className={ classNames(styles['btn-blue'], 'btn', 'btn-default')}>Upload Brand and Member</div>
									</div>
								</li>
							</ul>

			    		</div>

			    	</header>
			    	<section className={ styles['wrapper-content']}>
			    		<div className={ styles.content}>
			    			<div className={ classNames(styles['filter-product'])}>
			    				<div className={ classNames(styles['wrapper-filter'])}>
			    					<div className={ styles['filter-left']}>
				    					<div className={ styles['filter-id']}>
									   		<div className="input-group">
									    		<div className="input-group-btn">
									        	<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span className="caret"></span></button>
											    	<ul className="dropdown-menu">
												    	<li><a href="#">Action</a></li>
												    	<li><a href="#">Another action</a></li>
												    	<li><a href="#">Something else here</a></li>
												    	<li role="separator" className="divider"></li>
												    	<li><a href="#">Separated link</a></li>
											    	</ul>
									    		</div>
									    		<input type="text" className={ classNames(styles['input-productid'], 'form-control') } aria-label="..."/>
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
									    		<th className={ styles['brand-id'] }>ID</th>
									    		<th className={ styles['brand-name'] }>Brand Name</th>
									    		<th className={ styles['brand-maximum-discount'] }>Maximun Discount</th>
									    		<th colSpan="3" className={ styles['jade-group-discount'] }>JADE Group Discount
													<div className={ styles['brand-group'] }>Group 1</div>
													<div className={ styles['brand-group'] }>Group 2</div>
													<div className={ styles['brand-group'] }>Group 3</div>
												</th>
									    		<th className={ styles['brand-member-group-discount'] }>NAVY Discount</th>
									    		<th className={ styles['brand-member-group-discount'] }>SCALET Discount</th>
									    		<th className={ styles['brand-member-group-discount'] }>ONYX Discount</th>
									    		<th className={ styles['brand-member-group-discount'] }>CROWN Discount</th>
									    		<th className={ styles['brand-member-group-discount'] }>VEGA Discount</th>
									    		<th className={ styles['brand-member-group-discount'] }>Staff Discount</th>
									    		<th className={ styles['brand-update-date'] }>Update Date</th>
									    	</tr>
										</thead>
										<tbody>
									    	<tr>
									    		<td>1</td>
									    		<td>Loreal</td>
									    		<td>30%</td>
									    		<td>5%</td>
									    		<td>10%</td>
									    		<td>15%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>1 jun - 12 Aug</td>
									    	</tr>
									    	<tr>
									    		<td>2</td>
									    		<td>Exlry</td>
									    		<td>30%</td>
									    		<td>5%</td>
									    		<td>10%</td>
									    		<td>15%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>10%</td>
									    		<td>1 jun - 12 Aug</td>
									    	</tr>
											<tr>
												<td>1</td>
												<td>Loreal</td>
												<td>30%</td>
												<td>5%</td>
												<td>10%</td>
												<td>15%</td>
												<td>10%</td>
												<td>10%</td>
												<td>10%</td>
												<td>10%</td>
												<td>10%</td>
												<td>10%</td>
												<td>1 jun - 12 Aug</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className={ classNames(styles['filter-bottom'])}>
										<FilterPage/>
									</div>
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
