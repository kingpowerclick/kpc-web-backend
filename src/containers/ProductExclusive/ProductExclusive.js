import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		Breadcrumb } from 'components';

import { DropdownButton, MenuItem, Modal } from 'react-bootstrap';

export default class ProductExclusive extends Component {

state = {
  displayCompleteModal: false
}

handleOpenAddProductExcModal = () => {
  this.setState({
    displayCompleteModal: true
  });
}

handleCloseModal = () => {
  this.setState({
    displayCompleteModal: false
  });
}

handleOpenModal = (styles) => {
  const { displayCompleteModal } = this.state;
  	return (
		<Modal show={ displayCompleteModal } dialogClassName={ styles['addproduct-exclusive-modal'] } >
			<Modal.Header>
	    		<Modal.Title>Add product for Exclusive launch at King Power
	    			<button
	    				className={ classNames(styles['btn-ghost'], styles['close-modal'])}
	    				onClick={ this.handleCloseModal }>
	    				<i className="fa fa-times"></i>
	    			</button>
	    		</Modal.Title>
	    	</Modal.Header>
			<Modal.Body>
	    		<div className={ styles['addproduct-exclusive-box'] }>
					<div className={ styles['modal-body'] }>
						<div className={ styles['select-file']}>
							<span>Select file to Import</span>
						</div>
						<div className="input-group">
					    	<input type="text" className="form-control" placeholder="Chose file"/>
					    	<span className="input-group-btn">
							<button className="btn btn-default" type="button">Browse</button>
					    	</span>
						</div>
						<div className={ styles['download-file'] }>
							<a href="Download Sample File">Download Sample File</a>
						</div>
						<button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }> Check Data & Upload Now</button>
					</div>
	    		</div>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}

  render() {
    const styles = require('./productExclusive.scss');

    return (
    	<div className="container-fluid">
    		{ this.handleOpenModal(styles) }
    		<div className="row">
		    	<div className={ classNames(styles['product-exclusive-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Exclusive Launch at King Power</strong></h1>
			    		</div>
			    		<div className={ styles['page-filter']}>
							<ul className={ styles['list-filter']}>
								<li className={ classNames( styles.filter, styles['add-product'])}>
									<div className="dropdown">
										<DropdownButton title="Add Exclusive Products" className={ classNames(styles['btn-blue'], 'btn', 'btn-default', 'dropdown-toggle')}>
									    	<MenuItem eventKey="1">Add by Line Product</MenuItem>
									    	<MenuItem eventKey="2" onClick={ this.handleOpenAddProductExcModal }>Add by Excel</MenuItem>
									    	<MenuItem eventKey="3">Add by Line Parent Product</MenuItem>
									    	<MenuItem eventKey="4">Add GWP by Line Product</MenuItem>
									    	<MenuItem eventKey="4">Add GWP by Excel</MenuItem>
										</DropdownButton>
									</div>
								</li>
							</ul>
			    		</div>
			    		<Breadcrumb breadcrumb={ "Product > Exclusive Launch at King Power" }/>
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
									    		<th className={ styles['product-id'] }>ID</th>
									    		<th className={ styles['product-thumbnail'] }>Thumbnail</th>
									    		<th className={ styles['product-name'] }>Name</th>
									    		<th className={ styles['product-type'] }>Type</th>
									    		<th className={ styles['product-attribute'] }>Arttribute Set</th>
									    		<th className={ styles['product-sku'] }>SKU</th>
									    		<th className={ styles['product-price'] }>Price</th>
									    		<th className={ styles['product-qty'] }>Qty</th>
									    		<th className={ styles['product-status'] }>Status</th>
									    		<th className={ styles['product-batch'] }>Batch</th>
									    		<th className={ styles['product-action'] }>Action</th>
									    	</tr>
										</thead>
										<tbody>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>503576</td>
									    		<td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
									    		<td>-</td>
									    		<td>default</td>
									    		<td>8169513</td>
									    		<td>11,800.00 THB</td>
									    		<td>172</td>
									    		<td>Enable</td>
									    		<td>batch 110</td>
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
									    		<td>503576</td>
									    		<td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
									    		<td>Child Product </td>
									    		<td>default</td>
									    		<td>8169513</td>
									    		<td>11,800.00 THB</td>
									    		<td>172</td>
									    		<td>Enable</td>
									    		<td>batch 110</td>
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
									    		<td>503576</td>
									    		<td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
									    		<td>-</td>
									    		<td>default</td>
									    		<td>8169513</td>
									    		<td>11,800.00 THB</td>
									    		<td>172</td>
									    		<td>Enable</td>
									    		<td>batch 110</td>
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
