import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import StartComment from '../../components/comments/StartComment';
import CommentForm from '../comments/CommentForm';
import ListCommentItem from '../list/ListCommentItem';
import ListDivider from '../../components/list/ListDivider';
import Person from '../../../api/people/Person';

export default class Comments extends Component {
  getAuthorName(authorId) {
    return Person.findOne({userId: authorId});
  }
  getClasses() {
    let className = classNames({
      'collection chat': this.props.comments.length > 0
    });
    return className;
  }
  renderComments() {
    return (
      <div className="modal-body">
        <ul className={this.getClasses()}>
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
        <div className="modal-header">
          <h3 className="modal-title">Комментарии</h3>
        </div>
        { Meteor.userId() ? <CommentForm idea={this.props.idea} /> : <StartComment /> }
        { this.renderComments() }
      </div>
      <ListDivider border={true}/>
    </div>
    )
  }
}

Comments.propTypes = {
  idea: PropTypes.object,
  comments: PropTypes.array
}
