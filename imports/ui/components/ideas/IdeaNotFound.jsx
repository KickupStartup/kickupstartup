import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class IdeaNotFound extends Component {
  render () {
    return (
      <div className="container main">
        <div className="card white row-border">
          <div className="content">
            <h3><T>ideas.notFound.header</T></h3>
            <p><T>ideas.notFound.text</T></p>
          </div>
        </div>
      </div>
    )
  }
}
