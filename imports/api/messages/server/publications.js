import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Message from '../Message';

if (Meteor.isServer) {
  Meteor.publish("messages", function() {
    if (!this.userId) {
      return;
    }
    return Message.find({ $or: [{senderId: this.userId}, {recipientId: this.userId}] });
  });
}
