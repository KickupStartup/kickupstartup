import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import UnderDevelopmentIcon from '../common/UnderDevelopmentIcon';

export default class IdeaCreatePoll extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <UnderDevelopmentIcon/>
        <div className="modal-header">
          <h3 className="modal-title"><T>ideas.survey.create.header</T></h3>
        </div>
        <div className="modal-body">
          <p><T>ideas.survey.create.text</T></p>
        </div>
      </div>
    )
  }
}
