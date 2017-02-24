import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactCheckbox from '../common/ReactCheckbox';
import ReactInput from '../common/ReactInput';

export default class EmailNotificationSettingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationEnabled: props.profile.notificationEnabled,
      email: props.profile.email,
      emailStatus: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleNotificationEnabledChange(enabled) {
    Meteor.call("profile.update.notificationEnabled", enabled, function(error, result){
      if(error){
        console.log("An error occured while updating profile field notificationEnabled: ", error);
      }
      if(result){}
    });
  }
  handleEmailChange(newEmail) {
    let self = this;
    if (IsValidEmail(newEmail)) {
      Meteor.call("profile.update.email", newEmail, function(error, result){
        if(error){
          console.log("An error occured while updating profile field email: ", error);
        }
        if(result){
          self.setState({emailStatus: 'saved'});
        }
      });
    } else {
      this.setState({emailStatus: 'wrong e-mail'});
    }
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Нотификации</h3>
        </div>
        <div className="modal-body">
          <div className="input-field col s12 m6">
            <ReactCheckbox id="enableEmailNotifications"
              className="filled-in"
              checked={this.state.notificationEnabled}
              onChange={this.handleNotificationEnabledChange}
              label="Включить нотификации на электронную почту" />
            <div className="input-field col s12 m6">
              <ReactInput id="email"
                type="email"
                className="validate"
                labelError="неверный адрес"
                labelSuccess="правильно"
                status={this.state.emailStatus}
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Введите Ваш электронный адрес" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
