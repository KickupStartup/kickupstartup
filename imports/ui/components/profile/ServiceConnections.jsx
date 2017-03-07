import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactCheckbox from '../common/ReactCheckbox';
import ReactInput from '../common/ReactInput';

export default class ServiceConnections extends Component {
  constructor(props) {
    super(props);
    const services = Meteor.user().services || {};
    console.log(Object.keys(services));

    this.state = {
      connectedServices: Object.keys(services)
    };
  }
  loginWithGithub(e) {
    e.preventDefault();
    Meteor.loginWithGithub({}, this.afterLogin);
  }
  loginWithLinkedIn(e) {
    e.preventDefault();
    Meteor.loginWithLinkedIn({}, this.afterLogin);
  }
  loginWithFacebook(e) {
    e.preventDefault();
    Meteor.loginWithFacebook({}, this.afterLogin);
  }
  loginWithVk(e) {
    e.preventDefault();
    Meteor.loginWithVk({ requestPermissions: ['email']}, this.afterLogin);
  }
  loginWithTwitter(e) {
    e.preventDefault();
    Meteor.loginWithTwitter({}, this.afterLogin);
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
  renderSecondaryLink(service, loginFunc) {
    if (this.state.connectedServices.indexOf(service) >= 0) {
      return (
        <span className="secondary-content">Connected</span>
      );
    } else {
      return (
        <a href="#!" onClick={loginFunc} className="waves-light waves-effect btn orange secondary-content">Connect</a>
      );
    }
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Интеграция со сторонними сервисами</h3>
        </div>
        <div className="modal-body">
          <div className="col s12">
            <ul className="collection with-header">
              <li className="collection-item">
                <div>Facebook{this.renderSecondaryLink('facebook', this.loginWithFacebook)}</div>
              </li>
              <li className="collection-item">
                <div>VKontakte{this.renderSecondaryLink('vk', this.loginWithVk)}</div>
              </li>
              <li className="collection-item">
                <div>Google{this.renderSecondaryLink('google', this.loginWithGoogle)}</div>
              </li>
              <li className="collection-item">
                <div>Twitter{this.renderSecondaryLink('twitter', this.loginWithTwitter)}</div>
              </li>
              <li className="collection-item">
                <div>Github{this.renderSecondaryLink('github', this.loginWithGithub)}</div>
              </li>
              <li className="collection-item">
                <div>LinkedIn{this.renderSecondaryLink('linkedin', this.loginWithLinkedIn)}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
