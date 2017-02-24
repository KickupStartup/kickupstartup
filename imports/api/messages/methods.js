import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Message, { MessageType } from './Message';
import Person from '../people/Person';
import Idea from '../ideas/Idea';

Meteor.methods({
  'message.welcome': function(recipientId) {
    check(recipientId, String);
    const systemUser = Person.findOne({email: 'system@kickupstartup.com'});
    const messageInstance = new Message({
      type: MessageType.SYSTEM,
      recipientId: recipientId,
      senderId: systemUser._id,
      text: 'Добро пожаловать в наше сообщество!'
    });
    messageInstance.save();
    return messageInstance;
  }
});
