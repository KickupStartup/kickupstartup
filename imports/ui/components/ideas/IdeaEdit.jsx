import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
import classNames from 'classnames';

// tab content
import DraftTabContent from './new/DraftTabContent';
import ProblemTabContent from './new/ProblemTabContent';
import SolutionTabContent from './new/SolutionTabContent';
import StoryTabContent from './new/StoryTabContent';
import ValidationTabContent from './new/ValidationTabContent';

import IdeaName from './IdeaName';
import IdeaDraft from './IdeaDraft';
import IdeaProblem from './IdeaProblem';
import IdeaStory from './IdeaStory';
import IdeaCustomer from './IdeaCustomer';
import IdeaAskForReview from './IdeaAskForReview';
import IdeaCreatePoll from './IdeaCreatePoll';
import IdeaView from './IdeaView';
import IdeaPoll from './IdeaPoll';

export default class IdeaEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
    this.switchTab = this.switchTab.bind(this);
  }
  switchTab(event) {
    event.preventDefault();
    this.setState({
      activeTab: (event.target.nodeName == 'SPAN') ?
      event.target.parentElement.dataset.tabindex :
      event.target.dataset.tabindex
    });
  }
  tabActiveClass(active) {
    let classes = classNames({
      'active': this.state.activeTab == active,
    });
    return classes;
  }
  render () {
    const idea = this.props.idea;
    return (
      <div>
        <div className="main-grey">
          <div className="container main">
            <button type="submit" className="waves-effect waves-light green btn right">
              <span className="fa fa-check-circle"></span>
              <span>Review</span>
            </button>
            <h3>Idea #14</h3>
            <ul className="nav nav-tabs">
              <li className={this.tabActiveClass(0)}><a href="#0" data-tabindex="0" onClick={this.switchTab}><T>ideas.tabs.draft</T></a></li>
              <li className={this.tabActiveClass(1)}><a href="#1" data-tabindex="1" onClick={this.switchTab}><T>ideas.tabs.story</T></a></li>
              <li className={this.tabActiveClass(2)}><a href="#2" data-tabindex="2" onClick={this.switchTab}><T>ideas.tabs.problem</T></a></li>
              <li className={this.tabActiveClass(3)}><a href="#3" data-tabindex="3" onClick={this.switchTab}><T>ideas.tabs.solution</T></a></li>
              <li className={this.tabActiveClass(4)}><a href="#4" data-tabindex="4" onClick={this.switchTab}><T>ideas.tabs.validation</T></a></li>
            </ul>
          </div>
        </div>
        <div className="main"></div>
        <div className="container main">
          <DraftTabContent hidden={this.state.activeTab != 0 ? 'hidden' : ''} idea={idea} />
          <StoryTabContent hidden={this.state.activeTab != 1 ? 'hidden' : ''} idea={idea} />
          <ProblemTabContent hidden={this.state.activeTab != 2 ? 'hidden' : ''} idea={idea} />
          <SolutionTabContent hidden={this.state.activeTab != 3 ? 'hidden' : ''} idea={idea} />
          <ValidationTabContent hidden={this.state.activeTab != 4 ? 'hidden' : ''} idea={idea}/>
          {/* {this.state.activeTab == 2 ? <SolutionTabContent idea={idea}/> : ''}
          {this.state.activeTab == 3 ? <ValidationTabContent idea={idea}/> : ''}
          {this.state.activeTab == 4 ? <PreviewTabContent idea={idea}/> : ''} */}

          {/*
          {this.state.activeTab == 1 ? <IdeaName idea={idea}/> : ''}
          {this.state.activeTab == 1 ? <IdeaStory idea={idea}/> : ''}
          {this.state.activeTab == 3 ? <IdeaCustomer idea={idea}/> : ''}
          {this.state.activeTab == 3 ? <IdeaCreatePoll idea={idea}/> : ''}
          {this.state.activeTab == 3 ? <IdeaAskForReview idea={idea}/> : ''} */}

          {/* {this.state.activeTab === 4 ? <IdeaView idea={this.props.idea}
                    author={this.props.author}
                    commentsCount={0}
                    lastCommentTime={''} */}
        </div>
      </div>
    )
  }
}

IdeaEdit.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}
