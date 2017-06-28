import React, { Component } from 'react';
import classNames from 'classnames';

export default class Login extends Component {
  render() {
    const styles = require('./login.scss');
    const kingpowerLogo = require('./kingpower-white-logo.png');
    const kingpowerFooter = require('./footer-img.png');

    return (
      <div className="container-fulid">
        <div className="row">
        	<div className={ classNames(styles['login-view']) }>
                <div className={ styles['login-section']}>
                <div className={ styles['header-logo']}>
                    <img src={kingpowerLogo} alt="Kingpower Logo"></img>
                </div>
                    <div className="alert alert-danger" role="alert">
                      <span className="glyphicon glyphicon-exclamation-sign"></span>
                      <span className="sr-only"> Error </span>
                       Error : Invalid Username
                    </div>
                    <div className={ styles['input-group']}>
                      <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className={ styles['input-group']}>
                      <input type="password" className="form-control" placeholder="Password"></input>
                    </div>
                    <div className="help-box">
                        <a href="#" className={ styles['forgot-password']}>Forget Password?</a>
                        <div className={ styles['remember-me']}>
                          <input type="radio" name=""></input><label>Remember me</label>
                        </div>
                    </div>
                </div>
                <img src={kingpowerFooter} alt="" className={ styles['footer-image']}></img>
            </div>
          </div>
      	</div>
		);
  }
}
