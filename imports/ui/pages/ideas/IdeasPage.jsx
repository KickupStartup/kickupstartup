import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import { moment } from 'meteor/momentjs:moment';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListEnd from '../../components/list/ListEnd';
import ListDivider from '../../components/list/ListDivider';
import ListLoading from '../../components/list/ListLoading';
import ListMyIdeasEmptyCard from '../../components/list/ListMyIdeasEmptyCard';

import Person from '../../../api/people/Person';
import Comment from '../../../api/comments/Comment';

export default class IdeasPage extends Component {
  getIdeaAuthor(userId) {
    return Person.findOne({userId: userId});
  }
  getLastCommentTime(idea) {
    return Comment.findOne({ideaId:idea._id}, { $sort: { createdAt: -1}});
  }
  getCommentsCount(idea) {
    return Comment.find({ideaId: idea._id}).count();
  }
  renderIdeas() {
    return this.props.ideas.map((idea) => (
      <div key={idea._id}>
        <ListIdeaCard idea={idea}
                      author={this.getIdeaAuthor(idea.userId)}
                      commentsCount={this.getCommentsCount(idea)}
                      lastCommentTime={this.getLastCommentTime(idea)} />
      </div>
    ));
  }
  render () {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
        <div className="col s12">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
            {this.renderIdeas()}
          </ReactCSSTransitionGroup>
          <ListEnd/>
        </div>
      )
    }
  }
}

IdeasPage.propTypes = {
  ideas: PropTypes.array,
  loading: PropTypes.bool,
  user: PropTypes.object
}
