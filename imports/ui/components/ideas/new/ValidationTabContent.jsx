import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

import LiveEditor from '../../common/LiveEditor';
import IdeaCustomer from '../IdeaCustomer';
import IdeaCreatePoll from '../IdeaCreatePoll';
import IdeaInviteCollaborator from '../IdeaInviteCollaborator';
import IdeaAskForReview from '../IdeaAskForReview';

export default class StoryTabContent extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4>Validation tab help</h4>
          <p>Validation help. <i className="fa fa-window-maximize"></i>.
          </p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <IdeaCustomer idea={this.props.idea} />
        <IdeaCreatePoll idea={this.props.idea} />
        <IdeaAskForReview idea={this.props.idea} />
        {/* <LiveEditor
          onChange={this.handleStoryChange}
          value={this.props.idea.story}
          placeholder="Write your story..." /> */}
      </div>
    )
  }
}
