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
          <h4>Время проверить свои предположения.</h4>
          <p>После того, как Вы откроете доступ, любой человек в интернете сможет просмотреть Вашу идею, а зарегистрированные пользователи смогут оставить свой отзыв.</p>
          <p>В любой момент Вы сможете закрыть общий доступ к своей идее.</p>
        </div>
        {/* <IdeaCustomer idea={this.props.idea} />
        <ListDivider border={true} />
        <IdeaCreatePoll idea={this.props.idea} />
        <ListDivider border={true} /> */}
        <IdeaAskForReview idea={this.props.idea} />
        <ListDivider border={true} />
        <IdeaCreatePoll idea={this.props.idea} />
        {/* <ListDivider border={true} /> */}
        {/* <LiveEditor
          onChange={this.handleStoryChange}
          value={this.props.idea.story}
        placeholder="Write your story..." /> */}
        <ListDivider />
        {/* <div className="col s6 left"><a href="#draft" className="go-back">Back</a></div>
        <div className="col s6 right"><a href="#story" className="go-next">Preview</a></div>
        <ListDivider /> */}
      </div>
    )
  }
}
