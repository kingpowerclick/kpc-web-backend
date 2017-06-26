import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb } from 'components';

export default class AccountSetting extends Component {
  render() {
    const styles = require('./AccountSetting.scss');
    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['account-setting-view']) }>
			    	<header className={ styles['page-header'] }>
			    		<div className={ styles['page-title'] }>
			        		<h1 className={ styles.header }>Account Setting</h1>
			    		</div>
                        <Breadcrumb breadcrumb={ "Setting > Account Setting" }/>
                        <div className={ styles.back }>
                            <a href="#"> <i className="fa fa-chevron-left"></i> Back </a>
                            <a href="#"> <i className="fa fa-pencil"></i> Edit </a>
                            <div className={ styles['bottom-line']}></div>
                        </div>
			    	</header>
			    	<section className={ styles['wrapper-content']}>
			    		<div className="row">
			    			<div className="col-sm-6">
                                <div className="panel panel-test">
                                    <div className="panel-heading">Panel Heading</div>
                                    <div className="panel-body">Panel Content</div>
                                    <div className="panel-footer">Panel Footer</div>
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
