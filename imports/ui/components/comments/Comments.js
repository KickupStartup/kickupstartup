import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

import StartComment from '../../components/comments/StartComment';
import CommentForm from '../comments/CommentForm';
import ListCommentItem from '../list/ListCommentItem';
import ListDividerBorder from '../../components/list/ListDividerBorder';
import Person from '../../../api/people/Person';

class Comments extends Component {
  getAuthorName(authorId) {
    return Person.findOne({userId: authorId});
  }
  renderComments() {
    return (
      <div className="modal-body">
        <ul className="collection chat">
         {this.props.comments.map((comment) => (
          <div key={comment._id}>
            <ListCommentItem comment={comment} author={this.getAuthorName(comment.userId)} />
          </div>
          )
          )}
        </ul>
      </div>
    );
  }
  render () {
    return (
    <div>
      <div className="white row-border clearfix">
        { this.props.user ? <CommentForm idea={this.props.idea} /> : <StartComment /> }
        { this.renderComments() }
      </div>
      <ListDividerBorder/>
    </div>
    )
  }
}

Comments.propTypes = {
  idea: PropTypes.object,
  comments: PropTypes.array
}

export default Comments;
