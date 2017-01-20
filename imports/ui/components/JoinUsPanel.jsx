import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class JoinUsPanel extends Component {
  componentDidMount() {
    // init modals
    //$('.modal-trigger').leanModal();
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
    Meteor.loginWithGoogle({ requestPermissions: ['email']}, this.afterLogin);
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
      <div className="white row-border">
        <div className="content clearfix">
          <div className="languages right">
            <a href="#" className="active modal-bottom-link">English</a>&middot;<a href="#" className="modal-bottom-link">Русский</a>
          </div>
          <h3><T>joinus.header</T></h3>
          <p><T>joinus.text</T></p>
          <div className="card-footer clearfix pull-right">
            <a href="#!" onClick={this.loginWithGoogle.bind(this)} className="ticket-btn">
              <i className="fa fa-google-plus fa-lg" title="Google+"></i>Google+
            </a>
            <a href="#!" onClick={this.loginWithTwitter.bind(this)} className="ticket-btn">
              <i className="fa fa-twitter fa-lg" title="Twitter"></i>Twitter
            </a>
          </div>
        </div>
      </div>
    )
  }
}
