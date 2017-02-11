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
          <h4>Validation tab help</h4>
          <p>Validation help.
          </p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <IdeaCustomer idea={this.props.idea} />
        <ListDivider border={true} />
        <IdeaCreatePoll idea={this.props.idea} />
        <ListDivider border={true} />
        <IdeaAskForReview idea={this.props.idea} />
        {/* <LiveEditor
          onChange={this.handleStoryChange}
          value={this.props.idea.story}
        placeholder="Write your story..." /> */}
        <ListDivider />
        <div className="col s6 left"><a href="#draft" className="go-back">Back</a></div>
        <div className="col s6 right"><a href="#story" className="go-next">Preview</a></div>
        <ListDivider />
      </div>
    )
  }
}
