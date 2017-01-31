import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaInviteCollaborator extends Component {
  render () {
    return (
      <div className="card-reveal">
        <button type="button" className="card-title close">&times;</button>
        <h3 className="modal-title">Invite friends to edit</h3>
        <div className="modal-body">
          <div className="form-group form clearfix">
            <div className="input-field">
              <label htmlFor="emails">Emails</label>
              <input type="text" className="validate" placeholder="Please separate the recipients email by using commas" />
            </div>
            <div className="input-field">
              <label htmlFor="Message">Message</label>
              <textarea className="materialize-textarea validate"
                defaultValue="Hello!&#10;Мне нужна помощь с написанием идеи нового стартапа.&#10;Спасибо!">
              </textarea>
            </div>
          </div>
          <div className="col s12 text-center">
            <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
              <i className="fa fa-envelope"></i>Send
            </button>
          </div>
        </div>
      </div>
    )
  }
}
