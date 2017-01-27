import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaDraft extends Component {
  render () {
    return (
      <div className="white card row-border clearfix">
          <i className="fa fa-lock card-top-icon pull-right tooltipped" data-position="left" data-delay="50" data-tooltip="Not publicly visible"></i>
          <div className="modal-header">
            <h3 className="modal-title">Vague idea</h3>
          </div>
          <div className="modal-body">
              <p>Если у вас пока нет сформулированной идеи, то начните с ее описания в свободной форме. Обязательно пригласите друзей, которые помогут вам с кристализацией идеи. В результате вы получите информацию необходимую для заполнения следующего блока.</p>
              <div className="form">
                  <div className="input-field">
                      <label htmlFor="description">Description</label>
                      <textarea id="description" className="materialize-textarea clearfix"></textarea>
                  </div>
              </div>
              <div className="col s12 text-center">
                  <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                      <i className="fa fa-envelope-open"></i>
                      Invite friends to edit
                  </button>
                  <div className="modal-bottom-link">
                      <a href="#">I don't need it any more. Hide</a>
                  </div>
              </div>
          </div>
          <div className="card-reveal">
              <button type="button" className="card-title close">&times;</button>
              <h3 className="modal-title">Invite friends to edit</h3>
              <div className="modal-body">
                  <div className="form-group form clearfix">
                      <div className="input-field">
                          <label htmlFor="emails">Emails</label>
                          <input id="emails" type="text" className="validate" placeholder="Please separate the recipients email by using commas" />
                      </div>
                      <div className="input-field">
                          <label htmlFor="Message">Message</label>
                          <textarea id="message" className="materialize-textarea validate">Hello!&#10;Мне нужна помощь с написанием идеи нового стартапа.&#10;Спасибо!</textarea>
                      </div>
                  </div>
                  <div className="col s12 text-center">
                      <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                          <i className="fa fa-envelope"></i>Send
                      </button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
