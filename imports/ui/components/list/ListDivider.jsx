import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class ListDivider extends Component {
  render () {
    return (
      <div className="col s12 clearfix">
        <div className="row card-nexus">
          <div className="col s1">&nbsp;</div>
          <div className={this.props.border ? 'card-nexus-border col s1' : 'col s1'}></div>
        </div>
      </div>
    )
  }
}
