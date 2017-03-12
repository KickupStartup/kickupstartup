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
  'email.settings.update.enabled':function(enabled) {
    check(enabled, Boolean);
    const settings = getValidatedEmailSettings(this.userId);
    settings.enabled = enabled;
    settings.save();
    return settings;
  },
  'email.settings.update.email':function(email) {
    check(email, ValidEmail);
    const settings = getValidatedEmailSettings(this.userId);
    settings.email = email;
    settings.save();
    return settings;
  },
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
  'email.settings.update.ideaCoauthor':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.ideaCoauthor = toSend;
     settings.save();
     return settings;
  },
  'email.settings.update.ideaFeedback':function(toSend){
     check(toSend, Boolean);
     const settings = getValidatedEmailSettings(this.userId);
     settings.ideaFeedback = toSend;
     settings.save();
     return settings;
  }
});
