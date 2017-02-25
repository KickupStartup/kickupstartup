import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';

import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

import IdeaView from '../../components/ideas/IdeaView';
import IdeaPoll from '../../components/ideas/IdeaPoll';
import IdeaAskForReview from '../../components/ideas/IdeaAskForReview';
import IdeaNotFound from '../../components/ideas/IdeaNotFound';
import Comments from '../../components/comments/Comments';

// tab content
import IdeaEditSubmenu from '../../components/ideas/edit/IdeaEditSubmenu';
import DraftTabContent from '../../components/ideas/edit/DraftTabContent';
import ProblemTabContent from '../../components/ideas/edit/ProblemTabContent';
import SolutionTabContent from '../../components/ideas/edit/SolutionTabContent';
import StoryTabContent from '../../components/ideas/edit/StoryTabContent';
import ValidationTabContent from '../../components/ideas/edit/ValidationTabContent';
import WhatNext from '../../components/ideas/edit/WhatNext';

import { FormStep } from '../../../api/ideas/Idea';

export default class IdeaPage extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: false, activeTab: 0, initialized: false };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(event) {
    this.setState({ preview: !this.state.preview });
  }
  handleTabChange(activeTab) {
    this.setState({activeTab: activeTab});
  }
  componentDidUpdate() {
    if (!this.props.loading && !this.state.initialized) {
      this.setState({preview: this.props.idea.isPublic(), initialized: true});
    }
  }
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      if (!this.props.idea) {
        return (
          <IdeaNotFound />
        );
      }

      const isEdit = this.props.idea
                      && this.props.idea.isAuthor(Meteor.userId())
                      && !this.state.preview;
      return (
        <div>
          <IdeaEditSubmenu
            edit={isEdit}
            profile={this.props.profile}
            authored={this.props.idea.isAuthor(Meteor.userId())}
            idea={this.props.idea}
            onViewChanged={this.handleViewChange}
            onTabChanged={this.handleTabChange} />
          {isEdit ?
            <div className="container main with-tabs">
              <DraftTabContent hidden={this.state.activeTab != 0 ? 'hidden' : ''} idea={this.props.idea} />
              <StoryTabContent hidden={this.state.activeTab != 1 ? 'hidden' : ''} idea={this.props.idea} />
              <ProblemTabContent hidden={this.state.activeTab != 2 ? 'hidden' : ''} idea={this.props.idea} />
              <SolutionTabContent hidden={this.state.activeTab != 3 ? 'hidden' : ''} idea={this.props.idea} />
              <ValidationTabContent hidden={this.state.activeTab != 4 ? 'hidden' : ''} idea={this.props.idea}/>
              <ListDivider border={true} />
              <WhatNext />
              <ListDivider border={true} />
              <ListEnd/>
            </div> :
            <div className="container main with-tabs">
              <IdeaView idea={this.props.idea} profile={this.props.profile} />
              <ListDivider border={true}/>
              <Comments idea={this.props.idea} comments={this.props.comments} />
              <ListDivider border={true} />
              <ListEnd/>
            </div>
          }
        </div>
      );
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  idea: PropTypes.object,
  comments: PropTypes.array,
  profile: PropTypes.object,
}
