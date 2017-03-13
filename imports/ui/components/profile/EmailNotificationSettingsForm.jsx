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
      iAmMentioned: props.settings.iAmMentioned,
      ideaCreated: props.settings.ideaCreated,
      ideaCommented: props.settings.ideaCommented,
      ideaCoauthor: props.settings.ideaCoauthor,
      ideaFeedback: props.settings.ideaFeedback,
      enabled: props.settings.enabled,
      email: props.settings.email,
      emailStatus: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleFieldChange(fieldValue, fieldName) {
    Meteor.call("email.settings.update." + fieldName, fieldValue, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  handleNotificationEnabledChange(enabled) {
    Meteor.call("email.settings.update.enabled", enabled, function(error, result){
      if(error){
        console.log("An error occured while updating email notification settings field enabled: ", error);
      }
      if(result){}
    });
  }
  handleEmailChange(newEmail) {
    let self = this;
    if (IsValidEmail(newEmail)) {
      Meteor.call("email.settings.update.email", newEmail, function(error, result){
        if(error){
          console.log("An error occured while updating email notification settings field email: ", error);
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
          <div className="switch right">
            <label>
              Off
              <input type="checkbox" />
              <span className="lever"></span>
              On
            </label>
          </div>
          <h3 className="modal-title">Оповещения по электронной почте</h3>
        </div>
        <div className="modal-body">
          <div className="col s12">
            <ReactInput id="email"
              type="email"
              className="validate marginBottom"
              labelError="неверный адрес"
              labelSuccess="правильно"
              status={this.state.emailStatus}
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Введите Ваш электронный адрес" />
          </div>
          <div className="col s12">
            <ReactCheckbox id="enabled"
              className="filled-in"
              checked={this.state.enabled}
              onChange={this.handleFieldChange}
              label="Включить оповещения на электронную почту" />
          </div>
          <div className="col s12">
            <ReactCheckbox id="ideaCreated"
              className="filled-in"
              checked={this.state.ideaCreated}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.ideaCreated')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="ideaCommented"
              className="filled-in"
              checked={this.state.ideaCommented}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.ideaCommented')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="iAmMentioned"
              className="filled-in"
              checked={this.state.iAmMentioned}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.iAmMentioned')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="ideaCoauthor"
              className="filled-in"
              checked={this.state.ideaCoauthor}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.ideaCoauthor')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="ideaFeedback"
              className="filled-in"
              checked={this.state.ideaFeedback}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.ideaFeedback')} />
          </div>
        </div>
      </div>
    )
  }
}
