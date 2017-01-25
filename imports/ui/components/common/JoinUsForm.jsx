import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import SwitchLocaleLinks from '../locale/SwitchLocaleLinks';

export default class JoinUsForm extends Component {
  signUpWithPassword(e) {
    e.preventDefault();
  }
  loginWithPassword(e) {
    e.preventDefault();
  }
  loginWithGithub(e) {
    e.preventDefault();
    Meteor.loginWithGithub({}, this.afterLogin);
  }
  loginWithTwitter(e) {
    e.preventDefault();
    Meteor.loginWithTwitter({}, this.afterLogin);
  }
  loginWithLinkedIn(e) {
    e.preventDefault();
    Meteor.loginWithLinkedIn({}, this.afterLogin);
  }
  loginWithGoogle(e) {
    e.preventDefault();
    Meteor.loginWithGoogle({ requestPermissions: ['email']}, this.afterLogin);
  }
  afterLogin(error) {
    if (error) {
      console.log(error);
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col s12 clearfix">
          <div className="white row-border">
            <div className="content clearfix">
              <SwitchLocaleLinks classNames="languages right" linkClassNames="modal-bottom-link" />
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
        </div>
      </div>
    )
  }
}
