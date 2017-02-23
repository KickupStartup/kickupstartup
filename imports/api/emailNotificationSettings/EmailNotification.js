import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import EmailNotificationSettings from './emailNotificationSettings';

export default EmailNotification = Class.create({
  name: 'EmailNotification',
  collection: EmailNotificationSettings,
  fields: {
    userId: String,
    userSignedUp: { type: Boolean, default: false },
    ideaCreated: { type: Boolean, default: false },
    ideaCommented: { type: Boolean, default: true },
    iAmMentioned: { type: Boolean, default: true },
    coauthorInvited: { type: Boolean, default: true },
    coauthorReplied: { type: Boolean, default: true },
    feedbackReceived: { type: Boolean, default: true },
    feedbackRequested: { type: Boolean, default: true }
  },
  indexes: {
    userId: { fields: { userId: 1 }}
  },
  behaviors: {
    timestamp: {}
  }
});
