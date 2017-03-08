import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class ServiceConnections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectedServices: Object.keys(props.services || {})
    };
    this.currentService = '';
    this.renderSecondaryLink = this.renderSecondaryLink.bind(this);
    this.loginWithThirdPartyService = this.loginWithThirdPartyService.bind(this);
    this.updateConnectedServices = this.updateConnectedServices.bind(this);
  }
  loginWithThirdPartyService(e, service) {
    e.preventDefault();
    this.currentService = service;
    switch(service) {
      case 'google':
        Meteor.loginWithGoogle({requestPermissions: ['email']}, this.updateConnectedServices);
        break;
      case 'twitter':
        Meteor.loginWithTwitter({}, this.updateConnectedServices);
        break;
      case 'vk':
        Meteor.loginWithVk({requestPermissions: ['email']}, this.updateConnectedServices);
        break;
      case 'facebook':
        Meteor.loginWithFacebook({}, this.updateConnectedServices);
        break;
      case 'linkedin':
        Meteor.loginWithLinkedIn({}, this.updateConnectedServices);
        break;
      case 'github':
        Meteor.loginWithGithub({}, this.updateConnectedServices);
        break;
    }
  }
  updateConnectedServices(error) {
    if (error) {
      console.log(error);
    } else {
      const services = this.state.connectedServices;
      services.push(this.currentService);
      this.setState({connectedServices: services});
    }
  }
  renderSecondaryLink(service) {
    if (this.state.connectedServices.indexOf(service) >= 0) {
      return (
        <span className="secondary-content"><T>profile.services.connected</T></span>
      );
    } else {
      return (
        <a href="#!" onClick={(e) => this.loginWithThirdPartyService(e, service)}
          className="waves-light waves-effect btn orange secondary-content"><T>profile.services.connectButton</T></a>
      );
    }
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title"><T>profile.services.header</T></h3>
        </div>
        <div className="modal-body">
          <div className="col s12">
            <ul className="collection with-header">
              <li className="collection-item">
                <div>Facebook{this.renderSecondaryLink('facebook')}</div>
              </li>
              <li className="collection-item">
                <div>VKontakte{this.renderSecondaryLink('vk')}</div>
              </li>
              <li className="collection-item">
                <div>Google{this.renderSecondaryLink('google')}</div>
              </li>
              <li className="collection-item">
                <div>Twitter{this.renderSecondaryLink('twitter')}</div>
              </li>
              <li className="collection-item">
                <div>Github{this.renderSecondaryLink('github')}</div>
              </li>
              <li className="collection-item">
                <div>LinkedIn{this.renderSecondaryLink('linkedin')}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
