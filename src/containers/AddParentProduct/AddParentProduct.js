import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';

// import { Accordion, Panel } from 'react-bootstrap';

export default class AddParentProduct extends Component {
  render() {
    const styles = require('./addParentProduct.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
    			<div className={ classNames(styles['add-parent-product-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Add Parent Product</strong></h1>
			    		</div>
			        	<Breadcrumb breadcrumb={ "Products > Add Parent Product" }/>
			    	</header>
			    	<div className={ styles['wrapper-content']}>
				    	<section className={ styles['search-product']}>
				    		<div className={ styles['title-content'] }>
								<h2><strong>Please enter SKU Number</strong></h2>
				    		</div>
							<div className={ styles.content}>
								<div className={ styles['find-product'] }>
									<div className={ classNames( styles['inner-find-product'], 'row' ) }>
										<div className={ styles.title }><span>Please enter Product SKU (KP Article code) *</span></div>
										<div className={ classNames( styles['input-sku'], 'input-group') }>
											<span className="input-group-addon" id="basic-addon1">P</span>
											<input type="text" className="form-control" placeholder="112432" aria-describedby="basic-addon1"/>
										</div>
										<div className={ styles['input-description']}>
											<p>If your enter SKU number as same as added before, System will autocomplete information for old SKU.</p>
											<p>Ps. Not support add parent by SKU with prefix Pxxxxxx.</p>
										</div>
									</div>
								</div>
							</div>
				    	</section>
				    	<section className={ styles['parent-info'] }>
				    		<div className="row">
					    		<div className={ styles['info-left'] }>
									<div className={ styles.title }>
										<strong><h2>Parent Product Info</h2></strong>
									</div>
									<div className={ styles['form-input'] }>
										<div className={ styles['product-name']}>
											<span>Product Name <span className={ styles['star-mark'] }>*</span></span>
										</div>
										<form action="">
											<div className="form-group">
												<label>ENGLISH <span className={ styles['star-mark'] }>*</span></label>
												<input type="text" className="form-control" placeholder="CALVIN KLEIN UNDERWEAR ID MICRO LOW RISE TRUNK (Black/Blue)"/>
												<span className={ styles['input-description']}>(It will default if you didn’t set for other language)</span>
											</div>
											<div className="form-group">
												<label>THAI <span className={ styles['star-mark'] }>*</span></label>
												<input type="password" className="form-control" placeholder="CALVIN KLEIN กางเกงใน รุ่น ID MICRO LOW RISE TRUNK สีดำ/น้ำเงิน"/>
											</div>
											<div className="form-group">
												<label>CHINESE <span className={ styles['star-mark'] }>*</span></label>
												<input type="password" className="form-control" placeholder="CALVIN KLEIN ID系列 MICRO LOW RISE TRUNK 男士平角裤 (黑底蓝色)"/>
											</div>
											<div className="row">
												<div className={ classNames( styles['form-quntity'], 'form-group' )}>
													<label>Quantity (No quantity is out of stock) <span className={ styles['star-mark'] }>*</span></label>
													<input type="password" className="form-control" placeholder="20"/>
												</div>
												<div className={ classNames( styles['form-price'], 'form-group' )}>
													<label>Price <span className={ styles['star-mark'] }>*</span></label>
													<div className="input-group">
														<span className="input-group-addon" id="sizing-addon2">THB</span>
														<input type="text" className="form-control" placeholder="1290"/>
													</div>
												</div>
											</div>
										</form>
									</div>
					    		</div>
					    		<div className={ styles['info-right'] }>
									<div className={ styles.title }>
										<strong><h2>Hotkey switch</h2></strong>
									</div>
									<div className="row">
										<div className={ styles.hotkey }>
											<div className={ styles['hotkey-left'] }>
												<div className={ styles['wrapper-hotkey']}>
													<div className="form-group">
												    	<div className={ styles['form-select']}>
												    		<div className={ classNames( styles['title-form-select']) }>
												    			<label>​Enable Product </label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>Yes</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>No</label>
												    		</div>
												    	</div>
												    	<div className={ styles['form-select']}>
												    		<div className={ classNames( styles['title-form-select']) }>
												    			<label>​LAG</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>Yes</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>No</label>
												    		</div>
												    	</div>
													</div>
												</div>
											</div>
											<div className={ styles['hotkey-right'] }>
												<div className={ styles['wrapper-hotkey']}>
													<div className="form-group">
												    	<div className={ styles['form-select']}>
												    		<div className={ classNames( styles['title-form-select']) }>
												    			<label>​Exclusive launch at King Power</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>Yes</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>No</label>
												    		</div>
												    	</div>
												    	<div className={ styles['form-select']}>
												    		<div className={ classNames( styles['title-form-select']) }>
												    			<label>Best Seller</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>Yes</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>No</label>
												    		</div>
												    	</div>
												    	<div className={ styles['form-select']}>
												    		<div className={ classNames( styles['title-form-select']) }>
												    			<label>Hot Item</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>Yes</label>
												    		</div>
												    		<div className={ classNames( styles['form-radio'], 'radio') }>
												    			<label><input type="radio"/>No</label>
												    		</div>
												    	</div>
													</div>
												</div>
											</div>
										</div>
									</div>
					    		</div>
				    		</div>
				    	</section>
				    	<section className={ styles['add-image']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>Image</h2></strong>
							</div>
							<div className="row">
								<div className={ styles['option-box'] }>
									<div className={ styles['inner-box']}>
										<div className={ styles['option-hedder']}>
											<div className={ styles['option-title']}>
												<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
											</div>
											<div className={ styles['option-close']}><i className="fa fa-times"></i></div>
										</div>
										<div className={ styles['upload-img']}>
											<div className={ styles.img }>
												<img src="http://via.placeholder.com/250x250"/>
											</div>
											<div className={ styles['img-detail'] }>
												<span>Key visual art for this attribute (Optional)</span><br/>
												<span className={ styles['img-support']}>Support only 250x250 px in format JPEG, JPG</span>
											</div>
											<div className={ styles['choose-file']}>
												<input type="file" className="upload"/>
											</div>
											<div className={ styles['form-select']}>
									    		<div className={ classNames( styles['title-form-select']) }>
									    			<label>​Display option</label>
									    		</div>
									    		<div className={ classNames( styles['form-radio'], 'radio') }>
									    			<label><input type="radio"/>Cover</label>
									    		</div>
									    	</div>
									    	<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Done</button>
										</div>
									</div>
								</div>
								<div className={ styles['option-box'] }>
									<div className={ styles['inner-box']}>
										<div className={ styles['option-hedder']}>
											<div className={ styles['option-title']}>
												<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
											</div>
											<div className={ styles['option-close']}><i className="fa fa-times"></i></div>
										</div>
										<div className={ styles['upload-img']}>
											<div className={ styles.img }>
												<img src="http://via.placeholder.com/250x250"/>
											</div>
											<div className={ styles['img-detail'] }>
												<span>Key visual art for this attribute (Optional)</span><br/>
												<span className={ styles['img-support']}>Support only 250x250 px in format JPEG, JPG</span>
											</div>
											<div className={ styles['choose-file']}>
												<input type="file" className="upload"/>
											</div>
											<div className={ styles['form-select']}>
									    		<div className={ classNames( styles['title-form-select']) }>
									    			<label>​Display option</label>
									    		</div>
									    		<div className={ classNames( styles['form-radio'], 'radio') }>
									    			<label><input type="radio"/>Cover</label>
									    		</div>
									    	</div>
									    	<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Done</button>
										</div>
									</div>
								</div>
								<div className={ styles['option-box'] }>
									<div className={ styles['inner-box']}>
										<div className={ styles['option-hedder']}>
											<div className={ styles['option-title']}>
												<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
											</div>
											<div className={ styles['option-close']}><i className="fa fa-times"></i></div>
										</div>
										<div className={ styles['upload-img']}>
											<div className={ styles.img }>
												<img src="http://via.placeholder.com/250x250"/>
											</div>
											<div className={ styles['img-detail'] }>
												<span>Key visual art for this attribute (Optional)</span><br/>
												<span className={ styles['img-support']}>Support only 250x250 px in format JPEG, JPG</span>
											</div>
											<div className={ styles['choose-file']}>
												<input type="file" className="upload"/>
											</div>
											<div className={ styles['form-select']}>
									    		<div className={ classNames( styles['title-form-select']) }>
									    			<label>​Display option</label>
									    		</div>
									    		<div className={ classNames( styles['form-radio'], 'radio') }>
									    			<label><input type="radio"/>Cover</label>
									    		</div>
									    	</div>
									    	<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Done</button>
										</div>
									</div>
								</div>
								<div className={ classNames(styles['add-new'], styles['option-box']) }>
									<div className={ styles['inner-box']}>
										<div className={ styles['icon-plus']}>
											<i className="fa fa-plus fa-5x"></i>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add New</button>
									</div>
								</div>
							</div>
				    	</section>
				    	<section className={ styles['add-vdo']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>Video</h2></strong>
							</div>
							<div className="row">
								<div className={ styles['option-box'] }>
									<div className={ styles['inner-box']}>
										<div className={ styles['option-hedder']}>
											<div className={ styles['option-title']}>
												<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
											</div>
											<div className={ styles['option-close']}><i className="fa fa-times"></i></div>
										</div>
										<div className={ styles['input-url'] }>
											<div className={ classNames( styles['form-url'], 'form-group' )}>
												<label>URL</label>
												<input type="text" className="form-control" placeholder=""/>
											</div>
										</div>
										<div className={ styles['vdo-thumbnail']}>
											<div className={ styles.img }>
												<img src="http://via.placeholder.com/250x250"/>
											</div>
										</div>
										<div className={ styles['vdo-time']}>
											<div className={ classNames( styles['form-time'], 'form-group' )}>
												<label>Video thumnail capture time (x:xx minute)</label>
												<input type="text" className="form-control" placeholder=""/>
											</div>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Save</button>
									</div>
								</div>
								<div className={ styles['option-box'] }>
									<div className={ styles['inner-box']}>
										<div className={ styles['option-hedder']}>
											<div className={ styles['option-title']}>
												<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
											</div>
											<div className={ styles['option-close']}><i className="fa fa-times"></i></div>
										</div>
										<div className={ styles['input-url'] }>
											<div className={ classNames( styles['form-url'], 'form-group' )}>
												<label>URL</label>
												<input type="text" className="form-control" placeholder=""/>
											</div>
										</div>
										<div className={ styles['vdo-thumbnail']}>
											<div className={ styles.img }>
												<img src="http://via.placeholder.com/250x250"/>
											</div>
										</div>
										<div className={ styles['vdo-time']}>
											<div className={ classNames( styles['form-time'], 'form-group' )}>
												<label>Video thumnail capture time (x:xx minute)</label>
												<input type="text" className="form-control" placeholder=""/>
											</div>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Save</button>
									</div>
								</div>
								<div className={ classNames(styles['add-new'], styles['option-box']) }>
									<div className={ styles['inner-box']}>
										<div className={ styles['icon-plus']}>
											<i className="fa fa-plus fa-5x"></i>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add New</button>
									</div>
								</div>
							</div>
				    	</section>
				    	<section className={ styles['add-seo']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>SEO</h2></strong>
							</div>
							<div className="row">
								<div className={ styles['form-left'] }>
									<div className="form-group">
										<label>URL Key</label>
										<input type="text" className="form-control" placeholder="calvin-klein-underwear-id-micro-low-rise-trunk-black-p726613"/>
									</div>
									<div className={ styles['meta-keyword'] }>
			                        	<label>Meta Keyword</label>
			                        	<textarea rows="5" placeholder="CALVIN KLEIN, UNDERWEAR ID MICRO, LOW RISE TRUNK"></textarea>
			                    	</div>
								</div>
								<div className={ styles['form-right'] }>
									<div className="form-group">
										<label>Meta Title</label>
										<input type="text" className="form-control" placeholder="CALVIN KLEIN UNDERWEAR ID MICRO LOW RISE TRUNK (Black)"/>
									</div>
									<div className={ styles['meta-description'] }>
			                        	<label>Meta Description</label>
			                        	<textarea rows="5" placeholder="CALVIN KLEIN, UNDERWEAR ID MICRO, LOW RISE TRUNK"></textarea>
			                        	<span>Maximum 255 characters. Meta Description should optimually be between 150 - 160 characters.</span>
			                    	</div>
								</div>
							</div>
				    	</section>
				    	<section className={ styles['other-detail']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>Other Detail</h2></strong>
							</div>
							<div className="row">
								<div className={ styles['form-left'] }>
									<div className="row">
										<div className={ styles['wrapper-form-select']}>
											<div className={ styles['form-left-left']}>
												<div className={ styles['form-select']}>
										    		<div className={ classNames( styles['title-form-select']) }>
										    			<label>​KP Product Type</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio"/>Duty Free</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio"/>Non-Duty Free</label>
										    		</div>
										    	</div>
										    	<div className={ classNames(styles['form-select'], styles['brand-name']) }>
										    		<div className={ styles.title }>
										    			<label>​Brand Name</label>
										    		</div>
										    	</div>
											</div>
											<div className={ styles['form-left-right']}>
												<div className={ styles['form-select']}>
										    		<div className={ classNames( styles['title-form-select']) }>
										    			<label>​Delivery to Home only</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio"/>Yes</label>
										    		</div>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
										    			<label><input type="radio"/>No</label>
										    		</div>
										    	</div>
											</div>
										</div>
										<div className={ styles['select-brand']}>
											<div className="row">
												<div className={ styles['select-brand-left']}>
													<div>
														<label htmlFor="basic-url">Select Brand name</label>
														<div className="input-group">
															<input type="text" className="form-control" placeholder="CALVIN KLEIN"/>
															<span className="input-group-addon" ><i className="fa fa-caret-down"></i></span>
														</div>
													</div>
												</div>
												<div className={ styles['select-brand-left']}>
													<div>
														<div className="form-group">
															<label htmlFor="basic-url">Brand code (Auto generate)</label>
															<input type="text" className="form-control" placeholder="CKL"/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={ classNames(styles['brand-story'], styles['form-textarea']) }>
											<div className={ styles.title }>
												<span>Brand Story</span>
											</div>
											<div className={ styles['form-input'] }>
					                        	<label>English <span className={ styles['star-mark'] }>*</span> (It will be default if you didn’t set name for other language)</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Thai</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Chinese</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
										</div>
										<div className={ classNames(styles.material, styles['form-textarea']) }>
											<div className={ styles.title }>
												<span>Material</span>
											</div>
											<div className={ styles['form-input'] }>
					                        	<label>English <span className={ styles['star-mark'] }>*</span> (It will be default if you didn’t set name for other language)</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Thai</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Chinese</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
										</div>
										<div className={ classNames(styles.ingredient, styles['form-textarea']) }>
											<div className={ styles.title }>
												<span>Ingredient</span>
											</div>
											<div className={ styles['form-input'] }>
					                        	<label>English <span className={ styles['star-mark'] }>*</span> (It will be default if you didn’t set name for other language)</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Thai</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Chinese</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
										</div>
										<div className={ classNames(styles.warranty, styles['form-textarea']) }>
											<div className={ styles.title }>
												<span><strong>Warranty</strong></span>
											</div>
											<div className={ styles['form-input'] }>
					                        	<label>English <span className={ styles['star-mark'] }>*</span> (It will be default if you didn’t set name for other language)</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Thai</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
					                    	<div className={ styles['form-input'] }>
					                        	<label>Chinese</label>
					                        	<textarea rows="5" ></textarea>
					                    	</div>
										</div>
										<div>
										</div>
									</div>
								</div>
								<div className={ styles['form-right'] }>
									<div className={ styles['add-other-detail'] }>
										<div className={ styles['add-categories']}>
											<div className={ styles.title}><strong>Categories</strong></div>
											<div className={ styles['form-categories']}>
												<div className="form-group">
													<label>Master category <span className={ styles['star-mark'] }>*</span></label>
													<input type="text" className="form-control" placeholder="xxx / xxx /Beauty"/>
												</div>
												<div className="form-group">
													<label>Categories 1 <span className={ styles['star-mark'] }>*</span></label>
													<input type="text" className="form-control" placeholder="xxx / xxx /Beauty"/>
												</div>
												<div className="form-group">
													<label>Categories 2 <span className={ styles['star-mark'] }>*</span></label>
													<input type="text" className="form-control" placeholder="xxx / xxx /Beauty"/>
												</div>
												<div className="form-group">
													<label>Categories 3 <span className={ styles['star-mark'] }>*</span></label>
													<input type="text" className="form-control" placeholder="xxx / xxx /Beauty"/>
												</div>
												<div className="form-group">
													<label>Categories 4 <span className={ styles['star-mark'] }>*</span></label>
													<input type="text" className="form-control" placeholder="xxx / xxx /Beauty"/>
												</div>
												<div className="form-group">
													<label>Categories 5 <span className={ styles['star-mark'] }>*</span></label>
													<input type="text" className="form-control" placeholder="xxx / xxx /Beauty"/>
												</div>
												<div className="form-group">
													<label>Merchandise code</label>
													<input type="text" className="form-control" placeholder=""/>
												</div>
												<div className="form-group">
													<label>Supplier code</label>
													<input type="text" className="form-control" placeholder=""/>
												</div>
												<div className="form-group">
													<label>Batch number<span className={ styles['star-mark'] }> * </span>(Reference to Excel file)</label>
													<input type="text" className="form-control" placeholder=""/>
												</div>
											</div>
										</div>
										<div className={ styles['color-filter']}>
											<div className={ styles.title}><strong>Color for Filter</strong></div>
											<div action="" className={ styles['select-color']}>
												<div className="form-group">
													<label htmlFor="basic-url">Color for Filter</label>
													<div className="input-group">
														<input type="text" className="form-control" placeholder="No color for this product"/>
														<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
													</div>
												</div>
											</div>
										</div>
										<div className={ styles['add-size']}>
											<div className={ styles.title}><strong>Size (by supplier)</strong></div>
											<div className="form-group">
												<label>Batch number<span className={ styles['star-mark'] }> * </span>(Reference to Excel file)</label>
												<input type="text" className="form-control" placeholder="2XL"/>
											</div>
										</div>
										<div className={ styles['add-dimension']}>
											<div className={ styles.title}><strong>Dimension</strong></div>
											<div action="" className={ styles['select-color']}>
												<label>Dimension</label>
												<div>
													<div className={ classNames( styles['form-group-left'], 'form-group')}>
														<input type="text" className="form-control" placeholder=""/>
													</div>
													<div className={ classNames( styles['form-group-right'], 'input-group')}>
														<input type="text" className="form-control" placeholder="cm."/>
														<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
													</div>
												</div>
											</div>
										</div>
										<div className={ styles['add-weight']}>
											<div className={ styles.title}><strong>Weight</strong></div>
											<div action="" className={ styles['select-color']}>
												<label>Dimension</label>
												<div>
													<div className={ classNames( styles['form-group-left'], 'form-group')}>
														<input type="text" className="form-control" placeholder=""/>
													</div>
													<div className={ classNames( styles['form-group-right'], 'input-group')}>
														<input type="text" className="form-control" placeholder="kg."/>
														<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
													</div>
												</div>
											</div>
										</div>
										<div className={ styles['select-gender']}>
											<div className={ styles.title}><strong>Gender</strong></div>
											<div action="" className={ styles['select-color']}>
												<input type="checkbox" name="vehicle" value="Bike"/> Set gender option
												<div className={ styles['gender-list'] }>
													<div className={ classNames( styles['form-radio'], 'radio') }>
											    		<div className={ styles.list }><label><input type="radio"/>Men</label></div>
										    			<div className={ styles.list }><label><input type="radio"/>Women</label></div>
										    			<div className={ styles.list }><label><input type="radio"/>Unisex for Adults</label></div>
										    		</div>
												</div>
												<div className={ styles['gender-list'] }>
										    		<div className={ classNames( styles['form-radio'], 'radio') }>
											    		<div className={ styles.list }><label><input type="radio"/>Boy</label></div>
										    			<div className={ styles.list }><label><input type="radio"/>Girl</label></div>
										    			<div className={ styles.list }><label><input type="radio"/>Unisex for Kids</label></div>
										    		</div>
												</div>
											</div>
										</div>
										<div className={ styles['country-origin']}>
											<div className={ styles.title}><strong>Country of Origin</strong></div>
											<div className="form-group">
												<label>Country of Origin</label>
												<input type="text" className="form-control" placeholder="USA"/>
											</div>
										</div>
										<div className={ styles['country-origin']}>
											<div className={ styles.title}><strong>Country of Manufactuting</strong></div>
											<div className="form-group">
												<label>Country of Manufactuting</label>
												<input type="text" className="form-control" placeholder="USA"/>
											</div>
										</div>
										<div className={ styles['custom-attribute']}>
											<div className={ styles.title}><strong>Custom Attribute</strong></div>
											<div className={ styles['custom-attribute-wrapper']}>
												<div className={ styles['title-attribute']}><strong>CK Men Underware size</strong></div>
												<div className={ styles['custom-box']}>
													<div className="row">
														<div className={ styles['custom-hedder']}>
															<div className={ styles['custom-title']}>
																<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
															</div>
															<div className={ classNames(styles['custom-close'], 'pull-right') }><i className="fa fa-times"></i></div>
														</div>
														<div className={ styles['custom-attribute-inner']}>
															<label>CK Men Underware Size</label>
															<div className={ classNames( styles['form-group-right'], 'input-group')}>
																<input type="text" className="form-control" placeholder="S"/>
																<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={ styles['custom-attribute-wrapper']}>
												<div className={ styles['title-attribute']}><strong>CK Men Underware color</strong></div>
												<div className={ styles['custom-box']}>
													<div className="row">
														<div className={ styles['custom-hedder']}>
															<div className={ styles['custom-title']}>
																<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
															</div>
															<div className={ classNames(styles['custom-close'], 'pull-right') }><i className="fa fa-times"></i></div>
														</div>
														<div className={ styles['custom-attribute-inner']}>
															<label>CK Men Underware color</label>
															<div className={ classNames( styles['form-group-right'], 'input-group')}>
																<input type="text" className="form-control" placeholder="Black"/>
																<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={ styles['custom-attribute-wrapper']}>
												<div className={ styles['title-attribute']}><strong>How to use? (attr-clinique-howtouse)</strong></div>
												<div className={ styles['custom-box']}>
													<div className="row">
														<div className={ styles['custom-hedder']}>
															<div className={ styles['custom-title']}>
																<span><i className="fa fa-th-large"></i><strong> Hold to swap order</strong></span>
															</div>
															<div className={ classNames(styles['custom-close'], 'pull-right') }><i className="fa fa-times"></i></div>
														</div>
														<div className={ styles['custom-attribute-inner']}>
															<form action="">
																<div className={ styles['form-input'] }>
										                        	<label>English <span className={ styles['star-mark'] }>*</span></label>
										                        	<textarea rows="5" ></textarea>
										                    	</div>
										                    	<div className={ styles['form-input'] }>
										                        	<label>Thai</label>
										                        	<textarea rows="5" ></textarea>
										                    	</div>
																<div className={ styles['form-input'] }>
										                        	<label>Chinese</label>
										                        	<textarea rows="5" ></textarea>
										                    	</div>
															</form>
														</div>
													</div>
												</div>
											</div>
											<div className={ styles['custom-attribute-wrapper']}>
												<div className={ styles['title-attribute']}><strong>I want to add new custom attribute</strong></div>
												<div className={ styles['custom-box']}>
													<div className="row">
														<div className={ styles['custom-attribute-inner']}>
															<div className={ classNames( styles['form-group-right'], 'input-group')}>
																<input type="text" className="form-control" placeholder="Please select"/>
																<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
															</div>
															<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add Custom Attribute</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
				    	</section>
				    	<section className={ styles['add-related-product']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>You may also like (Related product)</h2></strong>
								<span>You can add releated product up to 6 products</span>
							</div>
							<div className="row">
								<div className={ classNames(styles['add-new'], styles['option-box']) }>
									<div className={ styles['inner-box']}>
										<div className={ styles['icon-plus']}>
											<i className="fa fa-plus fa-5x"></i>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add New</button>
									</div>
								</div>
								<div className={ classNames(styles['add-new'], styles['option-box']) }>
									<div className={ styles['inner-box']}>
										<div className={ styles['icon-plus']}>
											<i className="fa fa-plus fa-5x"></i>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add New</button>
									</div>
								</div>
								<div className={ classNames(styles['add-new'], styles['option-box']) }>
									<div className={ styles['inner-box']}>
										<div className={ styles['icon-plus']}>
											<i className="fa fa-plus fa-5x"></i>
										</div>
										<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add New</button>
									</div>
								</div>
							</div>
				    	</section>
				    	<section className={ styles['child-product-variation']}>
				    		<div className={ styles['section-title']}>
								<strong><h2>Child Product & Variation</h2></strong>
							</div>
							<div className="row">
								<div className={ styles['child-left']}>
									<div className={ styles['add-new-child']}>
										<div className={ styles['box-title']}>
											<strong>Add new child product</strong>
										</div>
										<div className={ styles.detail }>
											<p>Please enter Product SKU (KP Article code)* Use seperate SKU by comma (, ) for add more than 1 product.</p>
											<div className={ styles['add-product-search']}>
												<div className={ styles['input-search'] }>
													<input type="text" className="form-control" placeholder=""/>
												</div>
												<div className={ classNames(styles['button-add']) }>
													<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Add</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={ styles['child-right']}>
									<div className={ styles['edit-variation']}>
										<div className="row">
											<div className={ styles['edit-variation-left']}>
												<div className={ styles['box-title']}>
													<strong>Variation</strong>
												</div>
												<div className={ styles['defaul-variation']}>
													<span>Men Underware size</span>
												</div>
											</div>
											<div className={ styles['edit-variation-right']}>
												<div className={ classNames(styles['button-edit']) }>
													<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Edit</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={ styles['child-product'] }>
									<div className={ styles['child-product-header']}>
										<strong>Child product</strong><br/>
										<span>order by display order (Top - Bottom).</span>
									</div>
									<div className={ styles['child-product-box']}>
										<div className={ styles['box-header']}>
											<div className={ styles['custom-header']}>
												<span className={ styles['hold-to-swap']}><i className="fa fa-th-large"></i><strong> Hold to swap order&nbsp;&nbsp;</strong></span>
												<span className={ styles['product-name']}>CALVIN KLEIN UNDERWEAR ID MICRO LOW RISE TRUNK (Black/Blue) Size S</span>
											</div>
											<div className={ classNames(styles['custom-edit'], 'pull-right') }>
												<div className={ styles.delete }><span><i className="fa fa-times-circle"></i>&nbsp;Delete this child product</span></div>
												<div className={ styles.edit }><span><i className="fa fa-pencil"></i>&nbsp;Edit</span></div>
											</div>
										</div>
										<div className="row">
											<div className={ styles['box-body']}>
											<div className="row">
													<div className={ styles['img-product'] }>
														<img src="http://via.placeholder.com/120x120"/>
													</div>
													<div className={ styles['product-detail'] }>
														<div className="row">
															<div className={ styles['product-sku']}>
																<strong><span className={ styles.sku}>SKU&nbsp;</span><span className={ styles['sku-number']}>726590</span></strong>
															</div>
															<div className={ styles['product-detail-left']}>
																<div className={ styles['product-detail-inner']}>
																	<div className={ styles['product-detail-label']}>
																		<strong>Merchaindise code</strong>
																	</div>
																	<div className={ styles['product-detail-value']}>
																		<strong>123325</strong>
																	</div>
																</div>
																<div className={ styles['product-detail-inner']}>
																	<div className={ styles['product-detail-label']}>
																		<strong>Supplier code</strong>
																	</div>
																	<div className={ styles['product-detail-value']}>
																		<strong>12435468</strong>
																	</div>
																</div>
																<div className={ styles['product-detail-inner']}>
																	<div className={ styles['product-detail-label']}>
																		<strong>Batch no.</strong>
																	</div>
																	<div className={ styles['product-detail-value']}>
																		<strong>726590</strong>
																	</div>
																</div>
															</div>
															<div className={ styles['product-detail-right']}>
																<div className={ styles['product-detail-inner']}>
																	<div className={ styles['product-detail-label']}>
																		<strong>Quantity</strong>
																	</div>
																	<div className={ styles['product-detail-value']}>
																		<strong>20</strong>
																	</div>
																</div>
																<div className={ styles['product-detail-inner']}>
																	<div className={ styles['product-detail-label']}>
																		<strong>Price</strong>
																	</div>
																	<div className={ styles['product-detail-value']}>
																		<strong>THB 1,290.00</strong>
																	</div>
																</div>
															</div>
															<div className={ styles['product-enable'] }>
																<div className={ styles['enable-product'] }>
														    		<div className={ styles['enable-title'] }>
														    			<label>Enable Product</label>
														    		</div>
														    		<div className={ styles['radio-select']}>
															    		<div className={ classNames( styles['form-eneble']) }>
															    			<label><input type="radio"/>&nbsp;Yes</label>
															    		</div>
															    		<div className={ classNames( styles['form-eneble']) }>
															    			<label><input type="radio"/>&nbsp;No</label>
															    		</div>
														    		</div>
														    	</div>
															</div>
															<div className={ styles['product-variation']}>
																<strong>Variation</strong><br/>
																<label htmlFor="">Men Underware size</label>
																<div className={ classNames( styles['form-group-variation'], 'input-group')}>
																	<input type="text" className="form-control" placeholder="S"/>
																	<span className="input-group-addon" id="basic-addon3"><i className="fa fa-caret-down"></i></span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
				    	</section>
				    	<div className={ styles['preview-save']}>
							<button className={ classNames(styles['btn-white'], 'btn')} type="button">Previes</button>
							<button className={ classNames(styles['btn-blue'], 'btn')} type="button">Save</button>
				    	</div>
			    	</div>
		    	</div>
    		</div>
    	</div>
	);
  }
}
