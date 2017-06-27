import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb } from 'components';

export default class AccountSetting extends Component {
  render() {
    const styles = require('./accountSetting.scss');
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
                            <div className={ styles['sub-breadcrumb'] }>|</div>
                            <a href="#"> <i className="fa fa-pencil"></i> Edit </a>
                            <div className={ styles['bottom-line'] }></div>
                        </div>
			    	</header>
			    	<section className={ styles['wrapper-content'] }>
			    		<div className="row">
			    			<div className="col-sm-6">
                                <div className={ classNames('panel', styles['panel-default']) }>
                                    <div className={ styles['panel-heading'] }>My Personal Details</div>
                                    <div className={ styles['panel-body'] }>
                                        <div className="form-horizontal">
                                            <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                                <div className={ classNames(styles['panel-label'], 'col-md-3') }>Username</div>
                                                <div className="col-md-9">shiningshinee</div>
                                            </div>
                                            <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                                <div className={ classNames(styles['panel-label'], 'col-md-3') }>First name</div>
                                                <div className="col-md-9">Sarannuth </div>
                                            </div>
                                            <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                                <div className={ classNames(styles['panel-label'], 'col-md-3') }>Last name</div>
                                                <div className="col-md-9">Chanluang</div>
                                            </div>
                                            <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                                <div className={ classNames(styles['panel-label'], 'col-md-3') }>Email</div>
                                                <div className="col-md-9">080525.shiningshinee@gmail.com</div>
                                            </div>
                                            <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                                <div className={ classNames(styles['panel-label'], 'col-md-3') }>Interface local</div>
                                                <div className="col-md-9">English (USA)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ styles['panel-footer'] }>Change Password</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={ classNames('panel', styles['panel-default']) }>
                                    <div className={ styles['panel-body'] }>
                                        <div className={ styles.title }>My Personal Details</div>
                                        <div className={ styles.detail }>Please confirm your password for verify your account to save any change</div>
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
