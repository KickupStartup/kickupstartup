import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import Messages from './messages';

export const MessageType = Enum.create({
  name: 'MessageType',
  identifiers: {SYSTEM: 0, AUTHOR_INVITATION: 1, AUTHOR_INVITATION_REPLY: 2, AUTHOR_REQUEST: 3, AUTHOR_REQUEST_REPLY: 4, FEEDBACK_REQUEST: 5, FEEDBACK_RESPONSE: 6, PERSONAL: 7}
});

export default Message = Class.create({
  name: 'Message',
  collection: Messages,
  fields: {
    senderId: String,
    recipientId: String,
    text: String,
    surveyId: { type: String, optional: true },
    replyToMessageId: {type: String, optional: true},
    type: { type: MessageType, default: MessageType.SYSTEM }
  },
  indexes: {
    senderId: { fields: { authorId: 1 }},
    recipientId: { fields: { recipientId: 1 }}
  },
  behaviors: {
    timestamp: {}
  }
});
