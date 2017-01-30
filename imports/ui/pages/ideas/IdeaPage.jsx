import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';

// import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

import IdeaName from '../../components/ideas/IdeaName';
import IdeaDraft from '../../components/ideas/IdeaDraft';
import IdeaProblem from '../../components/ideas/IdeaProblem';
import IdeaStory from '../../components/ideas/IdeaStory';
import IdeaTargetMarket from '../../components/ideas/IdeaTargetMarket';
import IdeaView from '../../components/ideas/IdeaView';
import IdeaSurvey from '../../components/ideas/IdeaSurvey';
import Comments from '../../components/comments/Comments';

import Person from '../../../api/people/Person';
import Comment from '../../../api/comments/Comment';

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
      if (idea.userId === Meteor.userId()) {
        return (
          <div>
            {idea.step >= 4 ? <IdeaName idea={idea}/> : ''}
            {idea.step >= 4 ? <ListDivider border={true} /> : ''}
            {idea.step >= 8 ? <IdeaDraft idea={idea}/> : ''}
            {idea.step >= 8 ? <ListDivider border={true} /> : ''}
            {idea.step >= 12 ? <IdeaProblem idea={idea} /> : ''}
            {idea.step >= 12 ? <ListDivider border={true} /> : ''}
            {idea.step >= 16 ? <IdeaStory idea={idea} /> : ''}
            {idea.step >= 16 ? <ListDivider border={true} /> : ''}
            {idea.step >= 20 ? <IdeaTargetMarket idea={idea} /> : ''}
            {idea.step >= 20 ? <ListDivider border={true} /> : ''}
            {idea.step >= 32 ? <IdeaSurvey idea={idea} /> : ''}
            {idea.step >= 32 ? <ListDivider border={true} /> : ''}
            {idea.step >= 32 ? <Comments idea={idea} comments={this.props.comments} /> : ''}
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
            <IdeaSurvey idea={idea} />
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
