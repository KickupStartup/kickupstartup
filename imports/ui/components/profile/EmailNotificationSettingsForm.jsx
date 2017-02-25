import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactCheckbox from '../common/ReactCheckbox';

export default class EmailNotificationSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaCreated: props.settings.ideaCreated,
      ideaCommented: props.settings.ideaCommented,
      iAmMentioned: props.settings.iAmMentioned,
      coauthorInvited: props.settings.coauthorInvited,
      coauthorReplied: props.settings.coauthorReplied,
      feedbackReceived: props.settings.feedbackReceived,
      feedbackRequested: props.settings.feedbackRequested,
    };
  }
  handleFieldChange(fieldValue, fieldName) {
    Meteor.call("email.settings.update." + fieldName, fieldValue, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Настройки e-mail нотификаций</h3>
        </div>
        <div className="modal-body">
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
            <ReactCheckbox id="coauthorInvited"
              className="filled-in"
              checked={this.state.coauthorInvited}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.coauthorInvited')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="coauthorReplied"
              className="filled-in"
              checked={this.state.coauthorReplied}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.coauthorReplied')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="feedbackReceived"
              className="filled-in"
              checked={this.state.feedbackReceived}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.feedbackReceived')} />
          </div>
          <div className="col s12">
            <ReactCheckbox id="feedbackRequested"
              className="filled-in"
              checked={this.state.feedbackRequested}
              onChange={this.handleFieldChange}
              label={i18n.__('profile.emailSettings.feedbackRequested')} />
          </div>
        </div>
      </div>
    )
  }
}
