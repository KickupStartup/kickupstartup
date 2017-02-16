import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';
import IdeaInviteCollaborator from '../../../components/ideas/IdeaInviteCollaborator';

export default class DraftTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleDraftChange = this.handleDraftChange.bind(this);
    this.handleDraftChange = _.debounce(this.handleDraftChange, 2000);
  }
  handleDraftChange(draft) {
    const idea = this.props.idea;
    Meteor.call("idea.update.draft", idea._id, draft, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4><T>ideas.tabs.draft.alert.header</T></h4>
          <p><T>ideas.tabs.draft.alert.text</T></p>
        </div>
        {/* <IdeaInviteCollaborator idea={this.props.idea} />
        <ListDivider border={true} /> */}
        <div className="white card row-border clearfix">
          <Banner />
          <h3><T>ideas.tabs.draft.name</T> &middot; <T>ideas.locked</T></h3>
          <LiveEditor
            onChange={this.handleDraftChange}
            value={this.props.idea.draft}
            placeholder={i18n.__('ideas.tabs.draft.placeholder')} />
        </div>
        <ListDivider border={true} />
        <div className="white card row-border clearfix">
          <h3>What next?</h3>
          <p>Если вы завершили создание набросков, вы готовы перейти к написанию истории.</p>
          <div className="modal-bottom-link clearfix">
            <a href="#" className="left">Back</a>
            <a href="#" className="right">Ready to tell a story</a>
          </div>
        </div>
        <ListDivider />
      </div>
    )
  }
}
