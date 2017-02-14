import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../components/list/ListDivider';

export default class StartComment extends Component {
  loginWithTwitter(e) {
    e.preventDefault();
    Meteor.loginWithTwitter({}, this.afterLogin);
  }
  loginWithGoogle(e) {
    e.preventDefault();
    Meteor.loginWithGoogle({ requestPermissions: ['email']}, this.afterLogin);
  }
  render () {
    return (
      <div>
        <h3><T>comment.login.header</T></h3>
        <p><T>comment.login.text</T></p>
        <div className="s12 card-footer text-right">
          <a href="#!" onClick={this.loginWithGoogle.bind(this)} className="ticket-btn">
            <i className="fa fa-google-plus fa-lg" title="Google+"></i>Google+
          </a>
          <a href="#!" onClick={this.loginWithTwitter.bind(this)} className="ticket-btn">
            <i className="fa fa-twitter fa-lg" title="Twitter"></i>Twitter
          </a>
        </div>
      </div>
    )
  }
}
