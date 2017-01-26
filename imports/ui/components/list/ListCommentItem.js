import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import { moment } from 'meteor/momentjs:moment';

class ListCommentItem extends Component {
  render () {
    console.log(this.props.comment);

    return (
      <li className="collection-item avatar">
        <span className="chat-date">{moment(this.props.comment.createdAt).toString()}</span>
        <img src="/img/banner-avatar.jpg" alt="" className="circle"/>
        <span className="title">{this.props.comment.userId}</span>
        <p>{this.props.comment.message}</p>
      </li>
    )
  }
}

ListCommentItem.propTypes = {
  comment: PropTypes.object
}

export default ListCommentItem;
