import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import MessageItem from '../messages/MessageItem';
import Person from '../../../api/people/Person';

export default class MessagesCollection extends Component {
  getAuthorName(authorId) {
    return Person.findOne({userId: authorId});
  }
  getClasses() {
    let className = classNames({
      'collection chat': this.props.messages.length > 0
    });
    return className;
  }
  render () {
    return (
      <div className="white card row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Сообщения</h3>
        </div>
        <div className="modal-body">
          <ul className={this.getClasses()}>
            {this.props.messages.length === 0 ? <span>У Вас пока нет сообщений</span> : ''}
            {this.props.messages.map((message) => (
              <div key={message._id}>
                <MessageItem
                  message={message}
                  author={this.getAuthorName(message.userId)} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  messages: PropTypes.array
}
