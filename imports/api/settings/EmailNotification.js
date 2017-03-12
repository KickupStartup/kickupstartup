import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import EmailNotificationSettings from './emailNotificationSettings';

export default EmailNotification = Class.create({
  name: 'EmailNotification',
  collection: EmailNotificationSettings,
  fields: {
    userId: String,
    email: { type: String, optional: true },
    enabled: { type: Boolean, default: true },
    userSignedUp: { type: Boolean, default: false },
    iAmMentioned: { type: Boolean, default: true },
    ideaCreated: { type: Boolean, default: true },
    ideaCommented: { type: Boolean, default: true },
    ideaCoauthor: { type: Boolean, default: true },
    ideaFeedback: { type: Boolean, default: true },
  },
  indexes: {
    userId: {fields: { userId: 1 }},
    email: {fields: { email: 1 }, options: { unique: true, sparse: true }}
  },
  behaviors: {
    timestamp: {}
  }
});
