import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		ProductColumes,
		FilterActionSelect,
		FilterId,
		MarketingCampaign,
} from 'components';

import { Tabs, Tab } from 'react-bootstrap';

export default class Marketing extends Component {
  render() {
    const styles = require('./marketing.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['product-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Marketing</strong></h1>
			        		<div className={ styles['page-breadcrumb']}>
                				<span>Marketing</span>
                			</div>
                  		</div>
			    		<div className={ styles['page-filter']}>
							<ul className={ styles['list-filter']}>
								<ProductColumes/>
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
			    		<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Campaign">
                            	<div className={ styles.content}>
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
					    			<div className={ styles['table-detail'] }>
					    				<MarketingCampaign/>
										<div className="row">
											<div className={ classNames(styles['filter-bottom'])}>
												<FilterPage/>
											</div>
										</div>
					    			</div>
				    			</div>
                            </Tab>
                            <Tab eventKey={2} title="Cart Rule">
								<div className={ styles.content}>
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
					    			<div className={ styles['table-detail'] }>
					    				<MarketingCampaign/>
										<div className="row">
											<div className={ classNames(styles['filter-bottom'])}>
												<FilterPage/>
											</div>
										</div>
					    			</div>
				    			</div>
							</Tab>
                            <Tab eventKey={3} title="GWP Global">
								<div className={ styles.content}>
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
					    			<div className={ styles['table-detail'] }>
					    				<MarketingCampaign/>
										<div className="row">
											<div className={ classNames(styles['filter-bottom'])}>
												<FilterPage/>
											</div>
										</div>
					    			</div>
				    			</div>
							</Tab>
                            <Tab eventKey={4} title="Shipping Global">
								<div className={ styles.content}>
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
					    			<div className={ styles['table-detail'] }>
					    				<MarketingCampaign/>
										<div className="row">
											<div className={ classNames(styles['filter-bottom'])}>
												<FilterPage/>
											</div>
										</div>
					    			</div>
				    			</div>
							</Tab>
                        </Tabs>
			    	</section>
		    	</div>
    		</div>
    	</div>
	);
  }
}
