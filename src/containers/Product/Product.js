import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		ProductFilters,
		ProductColumes,
		ProductManageDynamicAttribute,
		FilterActionSelect,
		FilterId,
		ProductTable
		} from 'components';

export default class Product extends Component {
  render() {
    const styles = require('./product.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['product-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Product</strong></h1>
			        		<div className={ styles['page-breadcrumb']}>
                				<span>Products</span>
                			</div>
                  		</div>
			    		<div className={ styles['page-filter']}>
							<ul className={ styles['list-filter']}>
								<ProductFilters/>
								<ProductColumes/>
								<ProductManageDynamicAttribute/>
								<li className={ classNames( styles.filter, styles['add-product'])}>
									<div className="dropdown">
										<button className={ classNames(styles['btn-blue'], 'btn', 'btn-default', 'dropdown-toggle')} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									    	Add Products
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
											<li><a href="#">Action</a></li>
											<li><a href="#">Another action</a></li>
											<li><a href="#">Something else here</a></li>
											<li role="separator" className="divider"></li>
											<li><a href="#">Separated link</a></li>
										</ul>
									</div>
								</li>
							</ul>
			    		</div>
			    	</header>
			    	<section className={ styles['wrapper-content']}>
			    		<div className={ styles.content}>
			    			<div className={ styles['wrapper-product-tab']}>
								<ul className="nav nav-tabs">
								 	<li role="presentation" className={ classNames(styles['product-tab'], styles['tab-active'], 'active' )}><a href="#">Product</a></li>
								 	<li role="presentation" className={ classNames(styles['product-tab'])}><a href="#">Parent Produt</a></li>
								 	<li role="presentation" className={ classNames(styles['product-tab'])}><a href="#">GWP</a></li>
								</ul>
			    			</div>
			    			<div className={ classNames(styles['filter-product'])}>
			    				<div className={ classNames(styles['wrapper-filter'])}>
			    					<div className={ styles['filter-left']}>
										<FilterActionSelect title={ "Action" } selectOption={ ['Delete Product'] }/>
                                        <FilterId title={ "Product ID" } selectOption={ ['Product ID', 'SKU No.', 'Product Name', 'Brandname', 'Batch No.'] }/>
			    					</div>
			    					<div className={ classNames(styles['filter-right']) }>
				    					<FilterPage/>
			    					</div>
			    				</div>
			    			</div>
			    			<ProductTable/>
			    		</div>
			    	</section>
		    	</div>
    		</div>
    	</div>
	);
  }
}
