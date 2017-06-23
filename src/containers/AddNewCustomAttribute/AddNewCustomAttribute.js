import React, { Component } from 'react';
import classNames from 'classnames';

export default class AddNewCustomAttribute extends Component {
  render() {
    const styles = require('./addNewCustomAttribute.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
    		<div className={ classNames(styles['custom-attribute-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Product</strong></h1>
			        		<div className={ styles['page-breadcrumb']}>
								<span>Products</span>
			        		</div>
			    		</div>
			    	</header>
			    	<section className={ styles['wrapper-content']}>

			    	</section>
		    	</div>
    		</div>
    	</div>
	);
  }
}
