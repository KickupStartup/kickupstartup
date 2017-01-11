import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class LoginPanel extends Component {
  render () {
    return (
      <div id="modal-login" className="modal bottom-sheet ">
        <div className="modal-content">
            <a href="#" class="default pull-right"><span className="fa fa-remove fa-lg"></span></a>
            <h3>Login</h3>
            <div className="white row-border clearfix">
                <div className="content content-form">
                    <div className="col-sm-12">
                        <div className="input-field">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                        <input type="checkbox" className="filled-in" id="remember" checked="checked" />
                        <label for="remember">Remember me next time</label>
                    </div>
                    <div className="col-sm-12 text-center">
                        <button className="waves-effect waves-light btn-large btn-margin" type="submit">
                            <span className="fa fa-check fa-lg"></span>
                            <span>Submit</span>
                        </button>
                        <div className="login-links">
                            <p><a href="index.html">Forgot password?</a></p>
                            <p><a href="index.html">Don't have an account?</a></p>
                        </div>
                    </div>
                </div>
                <div className="card-footer clearfix">
                    <div className="pull-right">
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-linkedin fa-lg" title="Linkedin"></span>
                            <span>Linkedin</span>
                        </button>
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-github fa-lg" title="Github"></span>
                            <span>Github</span>
                        </button>
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-google-plus fa-lg" title="Google+"></span>
                            <span>Google+</span>
                        </button>
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-twitter fa-lg" title="Twitter"></span>
                            <span>Twitter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
