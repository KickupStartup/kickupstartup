import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import IdeaEditor from './IdeaEditor';

export default class SolutionTabContent extends Component {
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4><T>ideas.tabs.solution.alert.header</T></h4>
          <p><T>ideas.tabs.solution.alert.text</T></p>
        </div>
        <IdeaEditor fieldName="solution" idea={this.props.idea} />
      </div>
    )
  }
}
