import React, { Component } from 'react';
import classNames from 'classnames';

export default class Hello extends Component {
  render() {
    const styles = require('./product.scss');

    return (
    	<div className={ classNames(styles['product-view']) }>
	    	<header className={ styles['page-header']}>
	    		<div className={ styles['page-title']}>
	        		<h1 className={ styles.header }>Product</h1>
	        		<div className={ styles['page-breadcrumb']}>
						<span>Products</span>
	        		</div>
	    		</div>
	    		<div className={ styles['page-filter']}>
					<ul className={ styles['list-filter']}>
						<li className={ styles.filter }><i className="fa fa-filter"></i>Filtes</li>
						<li className={ styles.filter }><i className="fa fa-cog"></i>Columes</li>
						<li className={ classNames( styles.filter, styles['filter-mda'])}><i className="fa fa-share-square-o"></i>Manage Dynamic Attribute</li>
						<li className={ classNames( styles.filter, styles['add-product'])}>
							<button className={ classNames(styles['button-blue'], 'btn', 'btn-primary')}>Add Products</button>
						</li>
					</ul>
	    		</div>
	    	</header>
	    	<section className={ styles['wrapper-content']}>
	    		<div className={ styles.content}>
	    			<div className={ styles['wrapper-product-tab']}>
						<ul className="nav nav-tabs">
						 	<li role="presentation" className={ classNames(styles['product-tab'], styles['tab-active'], 'active' )}><a href="#">Add Product</a></li>
						 	<li role="presentation" className={ classNames(styles['product-tab'])}><a href="#">Add Parent Produt</a></li>
						 	<li role="presentation" className={ classNames(styles['product-tab'])}><a href="#">GWP</a></li>
						</ul>
	    			</div>
	    			<div className={ classNames(styles['filter-product'], 'row')}>
	    				<div className={ classNames(styles['wrapper-filter'], 'row')}>
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
							    		<input type="text" className="form-control" aria-label="..."/>
							    	</div>
		    					</div>
	    					</div>
	    					<div className={ styles['filter-right']}>
		    					<div className={ styles['filter-records']}>
									<div className="btn-group">
									 	<button type="button" className={ classNames(styles['btn-record'], 'btn', 'btn-default')}>10 records</button>
									 	<button type="button" className={ classNames(styles['btn-record-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
											<span className="caret"></span>
									 	</button>
									</div>
									<div className={styles['per-page']}><span>Per Page</span></div>
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
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li>
										    	<a href="#" aria-label="Next">
										    		<span aria-hidden="true">&raquo;</span>
										    	</a>
											</li>
										</ul>
									</nav>
		    					</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className={ styles['table-detail'] }>
	    				<div className={ styles['tab-content'] }>
							<table className="table table-striped">
								<thead>
							    	<tr className={ styles['title-table']}>
							    		<th className={ styles['product-checkbox'] }><input type="checkbox"/></th>
							    		<th className={ styles['product-id'] }>ID</th>
							    		<th className={ styles['product-thumbnail'] }>Thumbnail</th>
							    		<th className={ styles['product-sku'] }>SKU</th>
							    		<th className={ styles['product-name'] }>Name</th>
							    		<th className={ styles['product-type'] }>Type</th>
							    		<th className={ styles['product-price'] }>Price</th>
							    		<th className={ styles['product-qty'] }>Qty</th>
							    		<th className={ styles['produt-brand'] }>Brand</th>
							    		<th className={ styles['product-merchiandise'] }>Merchiandise No.</th>
							    		<th className={ styles['product-visibility'] }>Visibility</th>
							    		<th className={ styles['product-status'] }>Status</th>
							    	</tr>
								</thead>
								<tbody>
							    	<tr>
							    		<td><input type="checkbox"/></td>
							    		<td>503576</td>
							    		<td><img src="http://via.placeholder.com/50x50"/></td>
							    		<td>8169513</td>
							    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
							    		<td>-</td>
							    		<td>11,800.00 THB</td>
							    		<td>172</td>
							    		<td>EMPORIO ARMANI</td>
							    		<td>xxxxxx</td>
							    		<td>Yes</td>
							    		<td>Enable</td>
							    	</tr>
							    	<tr>
							    		<td><input type="checkbox"/></td>
							    		<td>503576</td>
							    		<td><img src="http://via.placeholder.com/50x50"/></td>
							    		<td>8169513</td>
							    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
							    		<td>Child Product </td>
							    		<td>11,800.00 THB</td>
							    		<td>172</td>
							    		<td>EMPORIO ARMANI</td>
							    		<td>xxxxxx</td>
							    		<td>Yes</td>
							    		<td>Enable</td>
							    	</tr>
							    	<tr>
							    		<td><input type="checkbox"/></td>
							    		<td>503576</td>
							    		<td><img src="http://via.placeholder.com/50x50"/></td>
							    		<td>8169513</td>
							    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
							    		<td>-</td>
							    		<td>11,800.00 THB</td>
							    		<td>172</td>
							    		<td>EMPORIO ARMANI</td>
							    		<td>xxxxxx</td>
							    		<td>Yes</td>
							    		<td>Enable</td>
							    	</tr>
								</tbody>
							</table>
						</div>
	    			</div>
	    		</div>
	    	</section>
    	</div>
	);
  }
}
