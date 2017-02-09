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

import ReactInput from '../common/ReactInput';

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
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  switchTab(event) {
    event.preventDefault();
    this.setState({
      activeTab: (event.target.nodeName == 'SPAN') ?
      event.target.parentElement.dataset.tabindex :
      event.target.dataset.tabindex
    });
  }
  handleNameChange(name) {
    const idea = this.props.idea;
    Meteor.call("idea.update.name", idea._id, name, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
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
            <div className="row">
              <div className="col s6">
                <ReactInput id="ideaName"
                  value={this.props.idea.name}
                  onChange={this.handleNameChange}
                  //label={i18n.__('ideas.header.title')}
                  placeholder="Your awesome idea title" />
              </div>
              <div className="col s6">
                <button onClick={this.changeView}>Preview</button>
              </div>
            </div>
            <ul className="nav nav-tabs">
              <li className={this.tabActiveClass(0)}><a href="#draft" data-tabindex="0" onClick={this.switchTab}><T>ideas.tabs.draft</T></a></li>
              <li className={this.tabActiveClass(1)}><a href="#story" data-tabindex="1" onClick={this.switchTab}><T>ideas.tabs.story</T></a></li>
              <li className={this.tabActiveClass(2)}><a href="#problem" data-tabindex="2" onClick={this.switchTab}><T>ideas.tabs.problem</T></a></li>
              <li className={this.tabActiveClass(3)}><a href="#solution" data-tabindex="3" onClick={this.switchTab}><T>ideas.tabs.solution</T></a></li>
              <li className={this.tabActiveClass(4)}><a href="#validation" data-tabindex="4" onClick={this.switchTab}><T>ideas.tabs.validation</T></a></li>
            </ul>
          </div>
        </div>
        <div className="container main"></div>
        <div className="container main"></div>
        <div className="container main">
          <DraftTabContent hidden={this.state.activeTab != 0 ? 'hidden' : ''} idea={idea} />
          <StoryTabContent hidden={this.state.activeTab != 1 ? 'hidden' : ''} idea={idea} />
          <ProblemTabContent hidden={this.state.activeTab != 2 ? 'hidden' : ''} idea={idea} />
          <SolutionTabContent hidden={this.state.activeTab != 3 ? 'hidden' : ''} idea={idea} />
          <ValidationTabContent hidden={this.state.activeTab != 4 ? 'hidden' : ''} idea={idea}/>
        </div>
      </div>
    )
  }
}

IdeaEdit.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}
