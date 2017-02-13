import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import { moment } from 'meteor/momentjs:moment';
import Avatar from 'react-avatar';

export default class ListCommentItem extends Component {
  render () {
    const fullName = this.props.author ? this.props.author.fullName : '';
    return (
      <li className="collection-item avatar">
        <span className="chat-date">{moment(this.props.comment.createdAt).fromNow()}</span>
        <Avatar className="circle" name={fullName} round={true} size={48}></Avatar>
        <span className="title">{fullName}</span><span> &middot; <a href="#!">Edit</a> &middot; <a href="#!">Delete</a></span>
        <p>{this.props.comment.message}</p>
      </li>
    )
  }
}

ListCommentItem.propTypes = {
  comment: PropTypes.object,
  author: PropTypes.object
}
