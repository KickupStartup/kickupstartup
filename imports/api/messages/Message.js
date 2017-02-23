import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import Messages from './messages';

export const MessageType = Enum.create({
  name: 'MessageType',
  identifiers: {NOTIFICATION: 0, INVITATION: 1, REQUEST: 2, RESPONSE: 3, PERSONAL: 4}
});

export default Message = Class.create({
  name: 'Message',
  collection: Messages,
  fields: {
    senderId: String,
    recipientId: String,
    surveyId: { type: String, optional: true },
    message: String,
    replyToMessageId: {type: String, optional: true},
    type: { type: MessageType, default: 0 }
  },
  indexes: {
    senderId: { fields: { authorId: 1 }},
    recipientId: { fields: { recipientId: 1 }}
  },
  behaviors: {
    timestamp: {}
  }
});
