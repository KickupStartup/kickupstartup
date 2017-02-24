import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import EmailNotification from './EmailNotification';

const getValidatedEmailSettings = function(userId) {
  if (!userId) {
    throw new Meteor.Error('email.settings.update.unauthorized',
      'Cannot perform any action with an idea if unauthorized.');
  } else {
    return EmailNotification.findOne({ userId: userId }) || new EmailNotification({ userId: userId });
  }
}

Meteor.methods({
  'email.settings.update.ideaCreated':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.ideaCreated = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.ideaCommented':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.ideaCommented = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.iAmMentioned':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.iAmMentioned = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.coauthorInvited':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.coauthorInvited = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.coauthorReplied':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.coauthorReplied = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.feedbackReceived':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.feedbackReceived = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.feedbackRequested':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.feedbackRequested = toSend;
     settings.save();
     return settings;
  },
});
