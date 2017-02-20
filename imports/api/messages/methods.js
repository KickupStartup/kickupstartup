import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Message, { MessageType } from './Message';

Meteor.methods({
  'message.idea.invitation.send': function(ideaId, recipientId, replyToMessageId, senderId, message) {
    check(ideaId, String);
    check(recipientId, String);
    check(senderId, String);
    check(replyToMessageId, Match.Maybe(String));
    check(message, String);

    // TODO: validate idea and sender permissions

    // create message instance
    let record = new Message({
      type: MessageType.INVITATION,
      recipientId,
      senderId,
      replyToMessageId,
      message
    });
    record.save();
    return record;
  },
  'message.idea.invitation.reply': function(ideaId, recipientId, replyToMessageId, senderId, message) {
    check(ideaId, String);
    check(recipientId, String);
    check(senderId, String);
    check(replyToMessageId, Match.Maybe(String));
    check(message, String);

    // TODO: validate idea and sender permissions

    // create message instance
    let record = new Message({
      type: MessageType.RESPONSE,
      recipientId,
      senderId,
      replyToMessageId,
      message
    });
    record.save();
    return record;
  },
  'message.idea.feedback.ask': function(ideaId, surveyId) {
    // ask people for idea feedback
    // only owners of the idea can ask for feedback
    // system should
    // attach survey
  },
  'message.idea.feedback.provide': function(ideaId, answers) {
    // provide feedback on an idea
    // answer survey questions
    // there can be reference to feedback request
    // may be no reference since user can leave feedback from idea's page even without request
  },
  'message.idea.notification.new': function(templateId, ideaId, authorId) {
    // this is a system event
    // recipient should be subscribed to new ideas
    // idea author should know how much users were notified
  },
  'message.idea.notification.commented': function(templateId, ideaId, authorId) {
    // this is a system event
    // recipient should be subscribed to comments on their ideas
  },
  'message.idea.notification.mentioned': function(templateId, ideaId, authorId) {
    // this is a system event
    // recipient should be subscribed to direct message mentions in the comments
  }
});
