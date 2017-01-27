import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

import ListCommentItem from '../list/ListCommentItem';
import CommentForm from '../comments/CommentForm';
import Person from '../../../api/people/Person';

class Comments extends Component {
  getAuthorName(authorId) {
    return Person.findOne({userId: authorId});
  }
  renderComments() {
    return this.props.comments.map((comment) => (
      <div key={comment._id}>
        <ListCommentItem comment={comment} author={this.getAuthorName(comment.userId)} />
      </div>
    ));
  }
  render () {
    return (
      <div className="white row-border clearfix" id="comments">
        <div className="modal-header scrollspy">
          <h3 className="modal-title"><T>comment.addHeader</T></h3>
        </div>
        <div className="modal-body">
          <CommentForm />
          <ul className="collection chat">
            {this.renderComments()}
          </ul>
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  idea: PropTypes.object,
  comments: PropTypes.array
}

export default Comments;
