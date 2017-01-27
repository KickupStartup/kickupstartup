import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';

import Comments from '../../components/comments/Comments';
import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListLoading from '../../components/list/ListLoading';

import Person from '../../../api/people/Person';
import Comment from '../../../api/comments/Comment';

class IdeaPage extends Component {
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
      return (
         <div>
           <ListIdeaCard
             idea={this.props.idea}
             author={this.getIdeaAuthor(this.props.idea.userId)}
             commentsCount={this.getCommentsCount(this.props.idea)}
             lastCommentTime={this.props.lastComment ? this.props.lastComment[0] : ''}/>
           <Comments idea={this.props.idea} comments={this.props.comments}/>
         </div>
      );
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool,
  comments: PropTypes.array,
  idea: PropTypes.object,
  user: PropTypes.object
}

export default IdeaPage;
