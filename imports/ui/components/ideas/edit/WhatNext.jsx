import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class WhatNext extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="white card row-border clearfix">
        <h3>What next?</h3>
        <p>Если вы завершили создание набросков, вы готовы перейти к написанию истории.</p>
        <div className="modal-bottom-link clearfix">
          <a href="#" className="left">Back</a>
          <a href="#" className="right">Ready to tell a story</a>
        </div>
      </div>
    )
  }
}
