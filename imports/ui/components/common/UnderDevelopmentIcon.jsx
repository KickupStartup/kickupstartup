import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class UnderDevelopmentIcon extends Component {
  render () {
    return (
      <span className="orange-text right">В разработке <i className="fa fa-wrench"></i></span>
    )
  }
}
