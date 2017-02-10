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
import ListEmpty from '../../components/list/ListEmpty';

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
        <ListIdeaCard
          idea={idea}
          profile={this.props.profile}
          author={this.getIdeaAuthor(idea.userId)}
          commentsCount={this.getCommentsCount(idea)}
          lastCommentTime={this.getLastCommentTime(idea)} />
      </div>
    ));
  }
  handleEmptyButtonClick(event) {
    event.preventDefault();
    // show create idea modal
    $('.modal').modal();
    $('#createidea').modal('open');
  }
  renderEmptyIdeasList() {
    switch(this.props.location.pathname) {
      case '/ideas/bookmarked':
        return (
          // when buttonText is not set, button is not rendered
          <ListEmpty
            header={i18n.__('list.empty.bookmarked.header')}
            text={i18n.__('list.empty.bookmarked.text')} />
        );
        break;
      case '/ideas/yours':
        return (
          <ListEmpty
            header={i18n.__('list.empty.yours.header')}
            text={i18n.__('list.empty.yours.text')}
            buttonText={i18n.__('list.empty.yours.buttonText')}
            onButtonClick={this.handleEmptyButtonClick} />
        );
        break;
      case '/ideas/all':
      default:
        return (
          <ListEmpty
            header={i18n.__('list.empty.all.header')}
            text={i18n.__('list.empty.all.text')}
            buttonText={i18n.__('list.empty.all.buttonText')}
            onButtonClick={this.handleEmptyButtonClick} />
        );
        break;
    }
  }
  render () {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
        <div className="container main">
          <div className="col s12">
            {/* <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeave={false}
              transitionLeaveTimeout={0}> */}
              { this.props.ideas.length == 0 ?
                  this.renderEmptyIdeasList() :
                  this.renderIdeas() }
            {/* </ReactCSSTransitionGroup> */}
            {this.props.ideas.length != 0 ? <ListEnd/> : ''}
          </div>
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
