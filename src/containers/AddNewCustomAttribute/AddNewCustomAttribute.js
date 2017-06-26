import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';

export default class AddNewCustomAttribute extends Component {
  render() {
    const styles = require('./addNewCustomAttribute.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
    		<div className={ classNames(styles['custom-attribute-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Add New Custom Attribute</strong></h1>
			    		</div>
			        	<Breadcrumb breadcrumb={ "Products > Add New Custom Attribute" }/>
			        	<div className={ styles['sub-menu'] }>
			        		<ul>
			        			<li><a href="#"><i className="fa fa-chevron-left"></i> Back </a></li>
			        			<li><a href="#"><i className="fa fa-floppy-o"></i> Save </a></li>
			        		</ul>
                    	</div>
                    	<div className={styles['kpc-line'] }></div>
			    	</header>
			    	<section className={ styles['custom-attribute']}>
						<div className={ styles.content}>
							<div className={ styles['custom-attribute']}>
								<div className={ styles['section-title']}>
									<strong><h2>New Custom Attribute</h2></strong>
								</div>
							 	<div className={styles['input-form']}>
							 		<form className="form-horizontal">
							 			<div className={ styles['input-form-left']}>
											<div className="form-group">
										    	<label className={ classNames(styles['form-label'], 'control-label') }>Attribute name *</label>
										    	<div className={ styles['form-input'] }>
										    		<input type="text" className="form-control" name="attributename"/>
										    	</div>
											</div>
											<div className="form-group">
										    	<label className={ classNames(styles['form-label'], 'control-label') }>Thai</label>
										  		<div className={ styles['form-input'] }>
										    		<input type="text" className="form-control" name="thai"/>
										    	</div>
											</div>
											<div className="form-group">
										    	<label className={ classNames(styles['form-label'], 'control-label') }>​Chinese</label>
										  		<div className={ styles['form-input'] }>
										    		<input type="text" className="form-control" name="chinese"/>
										    	</div>
											</div>
											<div className="form-group">
										    	<div className={ styles['form-select']}>
										    		<div>
										    			<label className={ classNames(styles['title-form-select']) }>​Status (Able to change after saved)</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Enabled</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Disabled</label>
										    		</div>
										    	</div>
											</div>
										</div>
										<div className={ styles['input-form-right']}>
											<div className="form-group">
												<h4><strong>Selection values</strong></h4>
										    	<div className={ styles['form-select']}>
										    		<div>
										    			<label className={ classNames(styles['title-form-select']) }>​This attribute is selection values.</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Yes</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>No</label>
										    		</div>
										    	</div>
											</div>
											<div className="form-group">
										    	<div className={ styles['form-select']}>
										    		<div>
										    			<label className={ classNames(styles['title-form-select']) }>​Display</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Label</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Image</label>
										    		</div>
										    		<div className={ classNames(styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Dropdown</label>
										    		</div>
										    	</div>
											</div>
										</div>
									 </form>
							 	</div>
							</div>
						</div>
			    	</section>
			    	<section className={ styles['add-selection']}>
			    		<div className={ styles['wrapper-attribute']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>Add Selection Value</h2></strong>
							</div>
							<div className={ styles.attribute}>
								<div className={ styles['inner-attribute']}>
									<div className={ styles['attribute-hedder']}>
										<div className={ styles['attribute-title']}>
											<strong>
												<span>Attribute 1 <span className={ styles.star }>*</span></span>
											</strong>
										</div>
										<div className={ styles['attribute-close']}><i className="fa fa-times"></i></div>
									</div>
									<div className={ styles['attribute-form']}>
										<form action="/action_page.php">
											<div className="form-group">
										    	<label >English * (It will default if you didn’t set for other language)</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<label>Thai</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<label>Chinese</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<div className={ styles['form-select']}>
										    		<div>
										    			<label className={ classNames( styles['title-form-select']) }>​Status (Able to change after saved)</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Enabled</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Disabled</label>
										    		</div>
										    	</div>
											</div>
											<div className={ classNames( styles['upload-file'], 'form-group') }>
												<span>Key visual art for this attribute (Optional)</span><br/>
												<div className={ styles['img-support']}>Support only 250x250 px in format JPEG, JPG</div>
												<div className={ styles['upload-img']}>
													<div><img src="http://via.placeholder.com/163x113"/></div>
													<div className={ styles['choose-file']}>
														<input type="file" className="upload" />
													</div>
												</div>
											</div>
											<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Done</button>
										</form>
									</div>
								</div>
							</div>
							<div className={ styles.attribute}>
								<div className={ styles['inner-attribute']}>
									<div className={ styles['attribute-hedder']}>
										<div className={ styles['attribute-title']}>
											<strong>
												<span>Attribute 1 <span className={ styles.star }>*</span></span>
											</strong>
										</div>
										<div className={ styles['attribute-close']}><i className="fa fa-times"></i></div>
									</div>
									<div className={ styles['attribute-form']}>
										<form action="/action_page.php">
											<div className="form-group">
										    	<label >English * (It will default if you didn’t set for other language)</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<label>Thai</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<label>Chinese</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<div className={ styles['form-select']}>
										    		<div>
										    			<label className={ classNames( styles['title-form-select']) }>​Status (Able to change after saved)</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Enabled</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Disabled</label>
										    		</div>
										    	</div>
											</div>
											<div className={ classNames( styles['upload-file'], 'form-group') }>
												<span>Key visual art for this attribute (Optional)</span><br/>
												<div className={ styles['img-support']}>Support only 250x250 px in format JPEG, JPG</div>
												<div className={ styles['upload-img']}>
													<div><img src="http://via.placeholder.com/163x113"/></div>
													<div className={ styles['choose-file']}>
														<input type="file" className="upload" />
													</div>
												</div>
											</div>
											<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Done</button>
										</form>
									</div>
								</div>
							</div>
							<div className={ styles.attribute}>
								<div className={ styles['inner-attribute']}>
									<div className={ styles['attribute-hedder']}>
										<div className={ styles['attribute-title']}>
											<strong>
												<span>Attribute 1 <span className={ styles.star }>*</span></span>
											</strong>
										</div>
										<div className={ styles['attribute-close']}><i className="fa fa-times"></i></div>
									</div>
									<div className={ styles['attribute-form']}>
										<form action="/action_page.php">
											<div className="form-group">
										    	<label >English * (It will default if you didn’t set for other language)</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<label>Thai</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<label>Chinese</label>
										    	<input type="text" className="form-control"/>
											</div>
											<div className="form-group">
										    	<div className={ styles['form-select']}>
										    		<div>
										    			<label className={ classNames( styles['title-form-select']) }>​Status (Able to change after saved)</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Enabled</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio" name="remember"/>Disabled</label>
										    		</div>
										    	</div>
											</div>
											<div className={ classNames( styles['upload-file'], 'form-group') }>
												<span>Key visual art for this attribute (Optional)</span><br/>
												<div className={ styles['img-support']}>Support only 250x250 px in format JPEG, JPG</div>
												<div className={ styles['upload-img']}>
													<div><img src="http://via.placeholder.com/163x113"/></div>
													<div className={ styles['choose-file']}>
														<input type="file" className="upload" />
													</div>
												</div>
											</div>
											<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Done</button>
										</form>
									</div>
								</div>
							</div>
							<div className={ classNames(styles['add-new'], styles.attribute) }>
								<div className={ styles['inner-attribute']}>
									<div className={ styles['icon-plus']}>
										<i className="fa fa-plus fa-5x"></i>
									</div>
									<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add New</button>
								</div>
							</div>
			    		</div>
			    	</section>
			    	<div className={ styles['save-button']}>
			    		<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Save</button>
			    	</div>
		    	</div>
    		</div>
    	</div>
	);
  }
}
