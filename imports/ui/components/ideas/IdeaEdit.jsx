import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
import classNames from 'classnames';

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
    this.setState({ activeTab: event.target.dataset.tabindex });
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
            <h3>Проверка идеи</h3>
            <ul className="nav nav-tabs">
              <li role="presentation" className={this.tabActiveClass(0)}><a href="#!" data-tabindex="0" onClick={this.switchTab}>Черновик</a></li>
              <li role="presentation" className={this.tabActiveClass(1)}><a href="#!" data-tabindex="1" onClick={this.switchTab}>Предположение</a></li>
              <li role="presentation" className={this.tabActiveClass(2)}><a href="#!" data-tabindex="2" onClick={this.switchTab}>Решение</a></li>
              <li role="presentation" className={this.tabActiveClass(3)}><a href="#!" data-tabindex="3" onClick={this.switchTab}>Тестирование</a></li>
              <li role="presentation" className={this.tabActiveClass(4)}><a href="#!" data-tabindex="4" onClick={this.switchTab}>Просмотр</a></li>
            </ul>
          </div>
        </div>
        <div className="main"></div>
          <div className="container main">
            {this.state.activeTab == 0 ? <IdeaDraft idea={idea}/> : ''}
            {this.state.activeTab == 1 ? <IdeaName idea={idea}/> : ''}
            {this.state.activeTab == 1 ? <IdeaStory idea={idea}/> : ''}
            {this.state.activeTab == 3 ? <IdeaCustomer idea={idea}/> : ''}
            {this.state.activeTab == 3 ? <IdeaCreatePoll idea={idea}/> : ''}
            {this.state.activeTab == 3 ? <IdeaAskForReview idea={idea}/> : ''}

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
