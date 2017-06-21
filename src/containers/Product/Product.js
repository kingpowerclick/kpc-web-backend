import React, { Component } from 'react';
import classNames from 'classnames';

export default class Hello extends Component {
  render() {
    const styles = require('./product.scss');

    return (
    	<div className={ classNames(styles['product-view'], 'container' ) }>
	    	<div className={ styles['page-header']}>
	    		<div className={ styles['page-title']}>
	        		<h1>Product</h1>
	        		<span>Products</span>
	    		</div>
	    		<div className={ styles['page-filter']}>
					<ul className={ styles['list-filter']}>
						<li className="">Filtes</li>
						<li className="">Columes</li>
						<li className="">Manage Dynamic Attribute</li>
						<li className="">
							<button>Add Product</button>
						</li>
					</ul>
	    		</div>
	    	</div>
    	</div>

    );
  }
}
