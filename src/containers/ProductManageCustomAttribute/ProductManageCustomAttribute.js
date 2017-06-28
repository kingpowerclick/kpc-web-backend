import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		Breadcrumb } from 'components';

export default class ProductManageCustomAttribute extends Component {

  render() {
    const styles = require('./productManageCustomAttribute.scss');

    return (
    	<div className="container-fluid">
    		{ this.handleOpenModal(styles) }
    		<div className="row">
		    	<div className={ classNames(styles['product-manage-custom-attribute-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Manage Dynamic Attribute</strong></h1>
			    		</div>
			    		<div className={ styles['page-filter']}>
							<ul className={ styles['list-filter']}>
								<li className={ classNames( styles.filter, styles['add-product'])}>
									<div className={ classNames( styles['add-product-dropdown'], 'dropdown' )}>
										<div className={ classNames(styles['btn-blue'], 'btn', 'btn-default')}>Add new Dynamic attribute</div>
									</div>
								</li>
							</ul>
			    		</div>
			    		<Breadcrumb breadcrumb={ "Product > Manage Dynamic Attribute" }/>
			    	</header>
			    	<section className={ styles['wrapper-content']}>
			    		<div className={ styles.content}>
			    			<div className={ classNames(styles['filter-product'])}>
			    				<div className={ classNames(styles['wrapper-filter'])}>
			    					<div className={ styles['filter-left']}>
				    					<div className={ styles['filter-action']}>
											<div className="btn-group">
											 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
											 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
													<span className="caret"></span>
											 	</button>
											</div>
				    					</div>
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
									    		<th className={ styles['product-checkbox'] }><input type="checkbox"/></th>
									    		<th className={ styles['product-id'] }>Attribute Set Name</th>
									    		<th className={ styles['product-thumbnail'] }>Attribute Set Parameter</th>
									    		<th className={ styles['product-name'] }>Display option</th>
									    		<th className={ styles['product-type'] }>Product use</th>
									    		<th className={ styles['product-attribute'] }>Status</th>
									    		<th className={ styles['product-action'] }>Action</th>
									    	</tr>
										</thead>
										<tbody>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>Shirt color</td>
									    		<td>Red, Green, Blue, Navy</td>
									    		<td>Dropdown</td>
									    		<td>172</td>
									    		<td>Enabled</td>
									    		<td>
									    			<div className="btn-group">
													 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
													 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
															<span className="caret"></span>
												 		</button>
													</div>
												</td>
									    	</tr>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>Shirt color</td>
									    		<td>Red, Green, Blue, Navy</td>
									    		<td>Dropdown</td>
									    		<td>172</td>
									    		<td>Enabled</td>
									    		<td>
									    			<div className="btn-group">
													 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
													 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
															<span className="caret"></span>
												 		</button>
													</div>
												</td>
									    	</tr>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>Shirt color</td>
									    		<td>Red, Green, Blue, Navy</td>
									    		<td>Dropdown</td>
									    		<td>172</td>
									    		<td>Enabled</td>
									    		<td>
									    			<div className="btn-group">
													 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
													 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
															<span className="caret"></span>
												 		</button>
													</div>
												</td>
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
