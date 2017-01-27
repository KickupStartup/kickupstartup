import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import { moment } from 'meteor/momentjs:moment';
import Avatar from 'react-avatar';

class ListCommentItem extends Component {
  render () {
    return (
      <li className="collection-item avatar">
        <span className="chat-date">{moment(this.props.comment.createdAt).fromNow()}</span>
        <Avatar className="circle" name={this.props.author.fullName} round={true} size={48}></Avatar>
        <span className="title">{this.props.author.fullName}</span>
        <p>{this.props.comment.message}</p>
      </li>
    )
  }
}

ListCommentItem.propTypes = {
  comment: PropTypes.object,
  author: PropTypes.object
}

export default ListCommentItem;
