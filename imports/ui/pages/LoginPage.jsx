import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class LoginPage extends Component {
  componentDidMount() {
    $('html').addClass('welcome');
  }
  componentWillUnmount() {
    $('html').removeClass('welcome');
  }
  loginWithTwitter(e) {
    e.preventDefault();
    Meteor.loginWithTwitter({}, this.afterLogin);
    console.log('loginWithTwitter clicked: ' + e);
  }
  loginWithGoogle(e) {
    e.preventDefault();
    Meteor.loginWithGoogle({ requestPermissions: ['profile']}, this.afterLogin);
    console.log('loginWithGoogle clicked: ' + e);
  }
  afterLogin(error) {
    if (error) {
      console.log(error);
    } else {
      FlowRouter.go('/ideas/create');
    }
  }
  render () {
    return (
      <div className="row">
        <div className="content text-center">
            <h2 className="heading"><T>joinus.header</T></h2>
            <p className="heading_sub flow-text"><T>joinus.text</T></p>
            <div className="col s12 text-center">
              <button onClick={this.loginWithGoogle.bind(this)} className="waves-effect waves-light btn-flat btn-large red-text text-lighten-5">
                  <span className="fa fa-google-plus fa-lg" title="Google+"></span>
                  <span>Google+</span>
              </button>
              &nbsp;
              <button onClick={this.loginWithTwitter.bind(this)} className="waves-effect waves-light btn-flat btn-large blue-text text-lighten-5">
                  <span className="fa fa-twitter fa-lg" title="Twitter"></span>
                  <span>Twitter</span>
              </button>
            </div>
        </div>
      </div>
    )
  }
}
