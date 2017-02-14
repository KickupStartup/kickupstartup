import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import LiveEditor from '../../common/LiveEditor';
import IdeaCustomer from '../IdeaCustomer';
import IdeaCreatePoll from '../IdeaCreatePoll';
import IdeaInviteCollaborator from '../IdeaInviteCollaborator';
import IdeaAskForReview from '../IdeaAskForReview';
import ListDivider from '../../../components/list/ListDivider';

export default class StoryTabContent extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4><T>ideas.tabs.validation.alert.header</T></h4>
          <p><T>ideas.tabs.validation.alert.text</T></p>
          <p><T>ideas.tabs.validation.alert.text1</T></p>
          <p><T>ideas.tabs.validation.alert.text2</T></p>
          <p><T>ideas.tabs.validation.alert.text3</T></p>
          <p><T>ideas.tabs.validation.alert.text4</T></p>
          <p><T>ideas.tabs.validation.alert.text5</T></p>
        </div>
        <IdeaAskForReview idea={this.props.idea} />
        <ListDivider border={true} />
        <IdeaCreatePoll idea={this.props.idea} />
        <ListDivider />
        <IdeaCustomer idea={this.props.idea} />
        <ListDivider border={true} />
      </div>
    )
  }
}
