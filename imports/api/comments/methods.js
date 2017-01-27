import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Comment from './Comment';
import Idea from '../ideas/Idea';

Meteor.methods({
  'comment.insert': function(ideaId, message) {
    check(message, String);
    check(ideaId, String);
    const idea = Idea.findOne({_id: ideaId, status: { $gt: 0 }});
    if (idea) {
      const comment = new Comment({
        message: message,
        ideaId: idea._id,
        userId: this.userId
      });
      comment.save();
    } else {
      throw new Meteor.Error('comment.insert.unauthorized',
        'Cannot insert comments in a private idea');
    }
  }
});
