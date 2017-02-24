import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import { moment } from 'meteor/momentjs:moment';
import Avatar from 'react-avatar';
import ReactTextArea from '../common/ReactTextArea';

export default class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {text: this.props.message.text};
  }
  render () {
    const fullName = this.props.author ? this.props.author.fullName : '';
    return (
      <li className="collection-item avatar">
        <span className="chat-date">{moment(this.props.message.createdAt).fromNow()}</span>
        <Avatar className="circle" name={fullName} round={true} size={48}></Avatar>
        <span className="title">{fullName}</span>
        <p>{this.state.text}</p>
      </li>
    )
  }
}

MessageItem.propTypes = {
  message: PropTypes.object,
  author: PropTypes.object
}
