import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		Breadcrumb } from 'components';


export default class SpecificGroup extends Component {

  render() {
    const styles = require('./specificGroup.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['specific-group-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Specific Group</strong></h1>
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
									    		<th className={ styles['specific-group-checkbox'] }><input type="checkbox"/></th>
									    		<th className={ styles['specific-group-id'] }>ID</th>
									    		<th className={ styles['specific-group-description'] }>Description</th>
									    		<th className={ styles['specific-group-apply-in'] }>Apply in</th>
									    		<th className={ styles['specific-group-create-date'] }>Create date</th>
									    		<th className={ styles['specific-group-status'] }>Status</th>
									    		<th className={ styles['specific-group-edit'] }></th>
									    		<th className={ styles['specific-group-view'] }></th>
									    	</tr>
										</thead>
										<tbody>
											<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>1</td>
									    		<td>Only Eye Shadow and Mascara use for Rainny and Autum winter  2017-2018</td>
									    		<td>Campaign name 1, Campaign name 2
													Campaign name 3, Campaign name 4
													Campaign name 5, Campaign name 6
													Campaign name 7 , Campaign name 8
													Campaign name 9, Campaign name 10
													Campaign name 11, Campaign name 12</td>
									    		<td>12/05/2016</td>
												<td>
									    			<div className="btn-group">
													 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
													 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
															<span className="caret"></span>
												 		</button>
													</div>
												</td>
									    		<td><a href="#">EDIT</a></td>
									    		<td><a href="#">VIEW</a></td>
									    	</tr>
											<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>2</td>
									    		<td>Only Eye Shadow and Mascara use for Rainny and Autum winter  2017-2018</td>
									    		<td>Campaign name 1, Campaign name 2
													Campaign name 3, Campaign name 4
													Campaign name 5, Campaign name 6
													Campaign name 7 , Campaign name 8
													Campaign name 9, Campaign name 10
													Campaign name 11, Campaign name 12</td>
									    		<td>12/05/2016</td>
												<td>
									    			<div className="btn-group">
													 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
													 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
															<span className="caret"></span>
												 		</button>
													</div>
												</td>
									    		<td><a href="#">EDIT</a></td>
									    		<td><a href="#">VIEW</a></td>
									    	</tr>
											<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>3</td>
									    		<td>Only Eye Shadow and Mascara use for Rainny and Autum winter  2017-2018</td>
									    		<td>Campaign name 1, Campaign name 2
													Campaign name 3, Campaign name 4
													Campaign name 5, Campaign name 6
													Campaign name 7 , Campaign name 8
													Campaign name 9, Campaign name 10
													Campaign name 11, Campaign name 12</td>
									    		<td>12/05/2016</td>
												<td>
									    			<div className="btn-group">
													 	<button type="button" className={ classNames(styles['btn-action'], 'btn', 'btn-default')}>Action</button>
													 	<button type="button" className={ classNames(styles['btn-action-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
															<span className="caret"></span>
												 		</button>
													</div>
												</td>
									    		<td><a href="#">EDIT</a></td>
									    		<td><a href="#">VIEW</a></td>
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
