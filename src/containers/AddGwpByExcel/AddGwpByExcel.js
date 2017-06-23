import React, { Component } from 'react';
import classNames from 'classnames';

export default class Hello extends Component {
  render() {
    const styles = require('./addGwpByExcel.scss');

    return (
      <div className="container-fulid">
        <div className="row">
        	<div className={ classNames(styles['product-view']) }>
    	    	<header className={ styles['page-header']}>
    	    		<div className={ styles['page-title']}>
    	        		<h1 className={ styles.header }>Add Parent Product</h1>
                  <div className={ styles['page-breadcrumb']}>
                    <a href="#">Products</a><span>></span><a href="#">Add Parent Product</a>
                  </div>
    	    		</div>
    	    	</header>

            <div className={ styles['sub-header']}>
              <h2>Add Product by Upload Excel File</h2>
            </div>

              <div className={styles.timeline}>
                <div className={styles['timeline-item']}>
                    <div className={ styles['timeline-milestone']}>
                      <span>1</span>
                    </div>
                    <div className={ styles['timeline-content']}>
                          <p>Upload product impage to S3-AWS</p>
                          <a href="#">(How to upload image)</a>
                          <div className={ styles['upload-button']}>
                            <button type="button" className={classNames(styles['btn-blue'], 'btn')}>Check Data & Upload Now</button>
                          </div>
                    </div>
                </div>
                <div className={styles['timeline-item']}>
                    <div className={ styles['timeline-milestone']}>
                      <span>2</span>
                    </div>
                    <div className={ styles['timeline-content']}>
                          <p>Upload Excel - batch file</p>
                          <a href="#">(Download Sample File)</a>
                          <input type="file" name="fileToUpload" id="fileToUpload" />
                          <div className={ styles['upload-button']}>
                            <button type="button" className={classNames(styles['btn-blue'], 'btn')}>Check Data & Upload Now</button>
                          </div>
                    </div>
                </div>

                </div>

            </div>
          </div>
      	</div>
		);
  }
}
