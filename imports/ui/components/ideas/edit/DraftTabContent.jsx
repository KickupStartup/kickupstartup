import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
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
        {/* <IdeaInviteCollaborator idea={this.props.idea} />
        <ListDivider border={true} /> */}
        <div className="card row-border clearfix">
          <Banner author={this.props.author} />
          <div className="white-card">
            <h3><T>ideas.tabs.draft.name</T> &middot; <T>ideas.locked</T></h3>
            <LiveEditor
              onChange={this.handleDraftChange}
              value={this.props.idea.draft}
              placeholder={i18n.__('ideas.tabs.draft.placeholder')} />
          </div>
        </div>
      </div>
    )
  }
}
