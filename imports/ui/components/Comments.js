import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

import ListCommentItem from './list/ListCommentItem';
import Person from '../../api/people/Person';

class Comments extends Component {
  getAuthorName(authorId) {
    const person = Person.findOne({userId: authorId});
    return person;
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
          <h3 className="modal-title">Add Comment</h3>
        </div>
        <div className="modal-body">
          <form className="scrollspy" role="form">
            <div className="form-horizontal">
              <div className="form-group clearfix">
                <div className="input-field">
                  { /*length="72"*/}
                  <input id="comment-text" type="text" placeholder="Title, hashtags or mentions. Max 72 characters"/>
                  <span className="character-counter counter"></span>
                </div>
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="input-field">
                { /* length="672" */ }
                <textarea id="textarea" className="materialize-textarea" placeholder="Let us know your thoughts! Max 672 characters"></textarea>
                <span className="character-counter counter"></span>
              </div>
            </div>
            <div className="form-group clearfix">
              <div className="tweet pull-left">
                <input type="checkbox" className="filled-in orange" id="filled-in-box"/>
                <label htmlFor="filled-in-box">Tweet comment</label>
              </div>
              <div className="pull-right">
                <button data-target="modal-sign_up" type="submit" className="waves-effect orange accent-3 waves-light btn">
                  <span className="fa fa-paper-plane"></span>
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </form>
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
