import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

import StartComment from '../../components/comments/StartComment';
import CommentForm from '../comments/CommentForm';
import ListCommentItem from '../list/ListCommentItem';
import ListDivider from '../../components/list/ListDivider';
import Person from '../../../api/people/Person';

export default class Comments extends Component {
  getAuthorName(authorId) {
    return Person.findOne({userId: authorId});
  }
  // render() {
  //   const style = this.props.comments ? 'collection chat' : '111';
  // }
  componentDidMount() {
    if (!this.props.comments.length - 1) {
      $('.comments').addClass(' collection chat');
    }
  }
  renderComments() {
    return (
      <div className="modal-body">
        <ul className="comments">
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
