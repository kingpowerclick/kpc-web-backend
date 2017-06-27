import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Breadcrumb } from 'components';

export default class AccountSetting extends Component {
  render() {
    const styles = require('./accountEdit.scss');
    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['account-edit-view']) }>
			    	<header className={ styles['page-header'] }>
			    		<div className={ styles['page-title'] }>
			        		<h1 className={ styles.header }>Account Setting</h1>
			    		</div>
                        <Breadcrumb breadcrumb={ "Setting > Account Setting" }/>
                        <div className={ styles.back }>
                            <Link to={ `/accountsetting` } activeClassName="active"><i className="fa fa-chevron-left"></i> Back</Link>
                            <div className={ styles['bottom-line'] }></div>
                        </div>
			    	</header>
			    	<section className={ styles['wrapper-content'] }>
			    		<div className="row">
			    			<div className="col-sm-6">
                                <div className={ classNames('panel', styles['panel-default']) }>
                                    <div className={ styles['panel-heading'] }>My Personal Details</div>
                                    <div className={ styles['panel-body'] }>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>Username <span className="text-danger">*</span></label>
                                            <input className={ classNames('form-control', styles['panel-control']) } id="username" placeholder="shiningshinee"/>
                                        </div>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>First name <span className="text-danger">*</span></label>
                                            <input className={ classNames('form-control', styles['panel-control']) } id="firstname" placeholder="Sarannuth"/>
                                        </div>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>Last name <span className="text-danger">*</span></label>
                                            <input className={ classNames('form-control', styles['panel-control']) } id="lastname" placeholder="Chanluang"/>
                                        </div>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>Email <span className="text-danger">*</span></label>
                                            <input type="email" className={ classNames('form-control', styles['panel-control']) } id="email" placeholder="080525.shiningshinee@gmail.com"/>
                                        </div>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>Interface local <span className="text-danger">*</span></label>
                                            <div className={ styles['select-style'] }>
                                                <select className={ classNames('form-control', styles['panel-control']) } id="interfaceLocal">
                                                    <option> English (USA) </option>
                                                    <option> Thai </option>
                                                    <option> China </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ styles['panel-heading'] }>Change Password</div>
                                    <div className={ styles['panel-body'] }>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>New password</label>
                                            <input className={ classNames('form-control', styles['panel-control']) } id="password" type="password"/>
                                        </div>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>Confirm password again</label>
                                            <input className={ classNames('form-control', styles['panel-control']) } id="confirmPassword" type="password"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className={ classNames('panel', styles['panel-default']) }>
                                    <div className={ styles['panel-body'] }>
                                        <div className={ styles.title }>My Personal Details</div>
                                        <div className={ styles.detail }>Please confirm your password for verify your account to save any change</div>
                                        <div className={ classNames(styles['panel-form-group'], 'form-group') }>
                                            <label className={ styles['panel-label'] }>Current password</label>
                                            <input className={ classNames('form-control', styles['panel-control']) } id="currentPassword" type="password" placeholder="Your current password"/>
                                        </div>
                                        <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default')} type="button" id="confirm">
                                            Confirm
                                        </button>
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
