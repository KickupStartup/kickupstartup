import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';
import { browserHistory } from 'react-router';

// import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

import IdeaName from '../../components/ideas/IdeaName';
import IdeaDraft from '../../components/ideas/IdeaDraft';
import IdeaProblem from '../../components/ideas/IdeaProblem';
import IdeaStory from '../../components/ideas/IdeaStory';
import IdeaCustomer from '../../components/ideas/IdeaCustomer';
import IdeaAskForReview from '../../components/ideas/IdeaAskForReview';
import IdeaCreatePoll from '../../components/ideas/IdeaCreatePoll';
import IdeaView from '../../components/ideas/IdeaView';
import IdeaPoll from '../../components/ideas/IdeaPoll';
import Comments from '../../components/comments/Comments';

import Person from '../../../api/people/Person';
import Comment from '../../../api/comments/Comment';
import { FormStep } from '../../../api/ideas/Idea';

export default class IdeaPage extends Component {
  componentDidMount() {
    $("#backButtonMenu").removeClass('hidden');
  }
  componentWillUnmount() {
    $("#backButtonMenu").addClass('hidden');
  }
  getIdeaAuthor(userId) {
    return Person.findOne({userId: userId});
  }
  getCommentsCount(idea) {
    return Comment.find({ideaId: idea._id}).count();
  }
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      const idea = this.props.idea;
      if (!idea) {
        // there is no such idea found in the database - show ideas instead
        browserHistory.push('/ideas');
      }
      if (idea.userId === Meteor.userId() && idea.step !== FormStep.DONE) {
        return (
          <div>
            {idea.step >= FormStep.NAME ? <IdeaName idea={idea}/> : ''}
            {idea.step >= FormStep.NAME ? <ListDivider border={true} /> : ''}
            {idea.step >= FormStep.DRAFT ? <IdeaDraft idea={idea}/> : ''}
            {idea.step >= FormStep.DRAFT ? <ListDivider border={true} /> : ''}
            {idea.step >= FormStep.PROBLEM ? <IdeaProblem idea={idea} /> : ''}
            {idea.step >= FormStep.PROBLEM ? <ListDivider border={true} /> : ''}
            {idea.step >= FormStep.STORY ? <IdeaStory idea={idea} /> : ''}
            {idea.step >= FormStep.STORY ? <ListDivider border={true} /> : ''}
            {idea.step >= FormStep.WHOISCUSTOMER ? <IdeaCustomer idea={idea} /> : ''}
            {idea.step >= FormStep.WHOISCUSTOMER ? <ListDivider border={true} /> : ''}
            {idea.step >= FormStep.CREATEPOLL ? <IdeaCreatePoll idea={idea} /> : ''}
            {idea.step >= FormStep.CREATEPOLL ? <ListDivider border={true} /> : ''}
            {idea.step >= FormStep.ASKFORREVIEW ? <IdeaAskForReview idea={idea} /> : ''}
            {idea.step >= FormStep.ASKFORREVIEW ? <ListDivider border={true} /> : ''}
            <ListEnd/>
          </div>
        );
      } else {
        return (
          // <ListIdeaCard
          //   idea={this.props.idea}
          //   author={this.getIdeaAuthor(this.props.idea.userId)}
          //   commentsCount={this.getCommentsCount(this.props.idea)}
          //   lastCommentTime={this.props.lastComment ? this.props.lastComment[0] : ''} />
          <div>
            <IdeaView idea={this.props.idea}
                      author={this.getIdeaAuthor(this.props.idea.userId)}
                      commentsCount={this.getCommentsCount(this.props.idea)}
                      lastCommentTime={this.props.lastComment ? this.props.lastComment[0] : ''} />
            <ListDivider border={true} />
            <IdeaPoll idea={idea} />
            <ListDivider border={true} />
            <Comments idea={idea} comments={this.props.comments} />
            <ListEnd/>
          </div>
        );
      }
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  idea: PropTypes.object,
  user: PropTypes.object
}
