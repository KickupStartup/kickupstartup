import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

export default class JoinUsPanel extends Component {
  componentDidMount() {
    // init modals
    $('.modal-trigger').leanModal();
  }
  signUpWithPassword(e) {
    e.preventDefault();
    console.log('signUpWithPassword clicked: ' + e);
  }
  loginWithPassword(e) {
    e.preventDefault();
    console.log('loginWithPassword clicked: ' + e);
  }
  loginWithGithub(e) {
    e.preventDefault();
    Meteor.loginWithGithub({}, this.afterLogin);
    console.log('loginWithGithub clicked: ' + e);
  }
  loginWithTwitter(e) {
    e.preventDefault();
    Meteor.loginWithTwitter({}, this.afterLogin);
    console.log('loginWithTwitter clicked: ' + e);
  }
  loginWithLinkedIn(e) {
    e.preventDefault();
    Meteor.loginWithLinkedIn({}, this.afterLogin);
    console.log('loginWithLinkedIn clicked: ' + e);
  }
  loginWithGoogle(e) {
    e.preventDefault();
    Meteor.loginWithGoogle({ requestPermissions: ['profile']}, this.afterLogin);
    console.log('loginWithGoogle clicked: ' + e);
  }
  afterLogin(error) {
    $('#modal-sign_up').closeModal();
    $('#modal-login').closeModal();
    if (error) {
      console.log(error);
    } else {
      FlowRouter.go('/profile');
    }
  }
  render () {
    return (
      <div className="row">
        <div className="white row-border">
          <div className="content text-center clearfix">
              <h3>Join Us</h3>
              <p>
                  Зарегистрируйтесь, если вы хотите создать стартап или присоединиться к разработке существующих.
              </p>
              <div className="col-sm-12 text-center">
                  <button data-target="modal-sign_up" type="submit" className="waves-effect waves-light btn btn-large btn-margin modal-trigger">
                      <span className="fa fa-thumbs-up fa-lg"></span>
                      <span>Sign Up</span>
                  </button>
                  <div className="login-links" >
                      <p><a href="#modal-login" className="modal-trigger">Already have an account?</a></p>
                  </div>
              </div>
          </div>
        </div>
        <div id="modal-login" className="modal bottom-sheet">
          <div className="modal-content">
              <a href="#" className="modal-action modal-close default pull-right"><span className="fa fa-remove fa-lg"></span></a>
              <h3>Login</h3>
              <div className="white row-border clearfix">
                  <div className="content content-form">
                      <div className="col-sm-12">
                          <div className="input-field">
                              <input id="email" type="email" className="validate" />
                              <label htmlFor="email">Email</label>
                          </div>
                          <div className="input-field">
                              <input id="password" type="password" className="validate" />
                              <label htmlFor="password">Password</label>
                          </div>
                          <input type="checkbox" className="filled-in" id="remember" />
                          <label htmlFor="remember">Remember me next time</label>
                      </div>
                      <div className="col-sm-12 text-center">
                          <button className="waves-effect waves-light btn btn-large btn-margin" type="submit">
                              <span className="fa fa-check fa-lg"></span>
                              <span>Submit</span>
                          </button>
                          <div className="login-links">
                              <p><a href="index.html">Forgot password?</a></p>
                              <p><a href="#modal-sign_up" className="modal-trigger">Don't have an account?</a></p>
                          </div>
                      </div>
                  </div>
                  <div className="card-footer clearfix">
                      <div className="pull-right">
                          <button onClick={this.loginWithLinkedIn.bind(this)} className="waves-effect waves-light btn-flat">
                              <span className="fa fa-linkedin fa-lg" title="Linkedin"></span>
                              <span>Linkedin</span>
                          </button>
                          <button onClick={this.loginWithGithub.bind(this)} className="waves-effect waves-light btn-flat">
                              <span className="fa fa-github fa-lg" title="Github"></span>
                              <span>Github</span>
                          </button>
                          <button onClick={this.loginWithGoogle.bind(this)} className="waves-effect waves-light btn-flat">
                              <span className="fa fa-google-plus fa-lg" title="Google+"></span>
                              <span>Google+</span>
                          </button>
                          <button onClick={this.loginWithTwitter.bind(this)} className="waves-effect waves-light btn-flat">
                              <span className="fa fa-twitter fa-lg" title="Twitter"></span>
                              <span>Twitter</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div id="modal-sign_up" className="modal bottom-sheet">
          <div className="modal-content">
              <a href="#" className="modal-action modal-close default pull-right"><span className="fa fa-remove fa-lg"></span></a>
              <h3>Sign Up</h3>
              <div className="white row-border clearfix">
                  <div className="content content-form">
                      <div className="col-sm-12">
                          <div className="input-field">
                              <input id="email" type="email" className="validate" />
                              <label htmlFor="email">Email</label>
                          </div>
                          <div className="input-field">
                              <input id="password" type="password" className="validate" />
                              <label htmlFor="password">Password</label>
                          </div>
                          <input type="checkbox" className="filled-in" id="filled-in-box" />
                      </div>
                      <div className="col-sm-12 text-center">
                          <button className="waves-effect waves-light btn btn-large btn-margin" type="submit">
                              <span className="fa fa-thumbs-up fa-lg"></span>
                              <span>Welcome aboard!</span>
                          </button>
                          <div className="login-links">
                              <p><a href="#modal-login" className="modal-trigger">Already have an account?</a></p>
                          </div>
                      </div>
                  </div>
                  <div className="card-footer clearfix">
                      <div className="pull-right">
                          <button onClick={this.loginWithLinkedIn.bind(this)} className="waves-effect waves-light btn btn-flat">
                              <span className="fa fa-linkedin fa-lg" title="Linkedin"></span>
                              <span>Linkedin</span>
                          </button>
                          <button onClick={this.loginWithGithub.bind(this)} className="waves-effect waves-light btn btn-flat">
                              <span className="fa fa-github fa-lg" title="Github"></span>
                              <span>Github</span>
                          </button>
                          <button onClick={this.loginWithGoogle.bind(this)} className="waves-effect waves-light btn btn-flat">
                              <span className="fa fa-google-plus fa-lg" title="Google+"></span>
                              <span>Google+</span>
                          </button>
                          <button onClick={this.loginWithTwitter.bind(this)} className="waves-effect waves-light btn btn-flat">
                              <span className="fa fa-twitter fa-lg" title="Google+"></span>
                              <span>Twitter</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
