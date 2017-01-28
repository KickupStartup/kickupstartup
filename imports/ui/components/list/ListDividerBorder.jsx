import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class ListDividerBorder extends Component {
  render () {
    return (
      <div className="s12 clearfix">
        <div className="row card-nexus">
          <div className="col s1">&nbsp;</div>
          <div className="card-nexus-border col s1"></div>
        </div>
      </div>
    )
  }
}
