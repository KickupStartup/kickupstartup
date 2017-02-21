import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import IdeaEditor from './IdeaEditor';

export default class DraftTabContent extends Component {
  openAddCoauthorModal() {
    $('.modal').modal();
    $('#addCoauthor').modal('open');
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4><T>ideas.tabs.draft.alert.header</T></h4>
          <p><T>ideas.tabs.draft.alert.text1</T><a href="#!" onClick={this.openAddCoauthorModal}><T>ideas.tabs.draft.alert.text2</T></a><T>ideas.tabs.draft.alert.text3</T></p>
        </div>
        <IdeaEditor
          fieldName="draft"
          header={i18n.__('ideas.tabs.draft.name') + ' · ' + i18n.__('ideas.locked')}
          idea={this.props.idea} />
      </div>
    )
  }
}
