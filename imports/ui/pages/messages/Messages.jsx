import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

export default class Messages extends Component {
  render() {
    return (
      <div className="container main">
        <div className="col s12">
          <div className="card white row-border clearfix">
            <div className="modal-header">
              <h3 className="modal-title">Notifications</h3>
            </div>
            <div className="modal-body">
              <div className="input-field col s12 m6">
                <input type="checkbox" className="filled-in" id="idNotifications" />
                <label htmlFor="idNotifications">Enable email notifications</label>
                <div className="input-field col s12 m6">
                  <input placeholder="Enter your email address" id="Email" type="text" className="validate" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ListDivider border={true}/>
        <div className="white card row-border clearfix">
          <h3>Messages</h3>
          <p>Копия сообщений как комментарии</p>
        </div>
        <ListDivider border={true} />
        <ListEnd/>
      </div>
    );
  }
}
