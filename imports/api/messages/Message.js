import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import Messages from './messages';

export const MessageType = Enum.create({
  name: 'MessageType',
  identifiers: {SYSTEM: 0, AUTHOR_INVITATION: 1, AUTHOR_INVITATION_REPLY: 2, FEEDBACK_REQUEST: 3, FEEDBACK_RESPONSE: 4, PERSONAL: 5}
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
