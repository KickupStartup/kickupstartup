import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class ListLoading extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s12">
          Loading..
        </div>
      </div>
    )
  }
}
