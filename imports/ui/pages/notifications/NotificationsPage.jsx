import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../components/list/ListDivider';

export default class NotificationsPage extends Component {
  render() {
    return (
      <div className="container main">
        <div className="row">
          <div className="col s12">
            <div className="white row-border">
              <div className="content clearfix">
                <h3>Notifications</h3>
                <p>
                  Notofications List
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
