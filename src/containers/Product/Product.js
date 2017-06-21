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
	        		<span>Products</span>
	    		</div>
	    		<div className={ styles['page-filter']}>
					<ul className={ styles['list-filter']}>
						<li className=""><i className="fa fa-filter"></i>Filtes</li>
						<li className=""><i className="fa fa-cog"></i>Columes</li>
						<li className="">Manage Dynamic Attribute</li>
						<li className={ styles['add-product']}>
							<button className="btn btn-primary">Add Products</button>
						</li>
					</ul>
	    		</div>
	    	</header>
	    	<section>
	    		<div className={ styles.content}>
	    			<div className={ styles['product-tab']}>
						<ul className="nav nav-tabs">
						 	<li role="presentation" className="active"><a href="#">Add Product</a></li>
						 	<li role="presentation"><a href="#">Add Parent Produt</a></li>
						 	<li role="presentation"><a href="#">GWP</a></li>
						</ul>
	    			</div>
	    			<div>
	    				<div className="tab-content">
							<div id="add-product" className="tab-pane fade in active">
								<h3>HOME</h3>
								<p>Some content.</p>
							</div>
						</div>
	    			</div>
	    		</div>
	    	</section>
    	</div>
		);
  }
}
