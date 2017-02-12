import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Comment from './Comment';
import Idea from '../ideas/Idea';

const getValidatedIdea = function(userId, ideaId) {
  if (!userId) {
    throw new Meteor.Error('comment.unauthorized',
      'Cannot comment anything if unauthorized.');
  } else {
    const idea = Idea.findOne({_id: ideaId, status: { $gt: 0 }});
    if (!idea) {
      throw new Meteor.Error('comment.idea.notfound',
        'There is no such an idea in our database.');
    } else {
      return idea;
    }
  }
}

const getValidatedComment = function(userId, commentId, checkAuthor) {
  if (!userId) {
    throw new Meteor.Error('comment.unauthorized',
      'Cannot comment anything if unauthorized.');
  } else {
    const comment = Comment.findOne({_id: commentId});
    if (!comment) {
      throw new Meteor.Error('comment.notfound',
        'There is no such a comment in our database. id:'+commentId);
    } else {
      if (checkAuthor && comment.userId !== userId) {
        throw new Meteor.Error('comment.update.unauthorized',
          'Cannot update comment if you are not an author.');
      } else {
        return comment;
      }
    }
  }
}

Meteor.methods({
  'comment.insert': function(ideaId, message) {
    check(ideaId, String);
    check(message, String);
    const idea = getValidatedIdea(this.userId, ideaId);
    const comment = new Comment({
      message: message,
      ideaId: idea._id,
      userId: this.userId
    });
    comment.save();
    return comment;
  },
  // comment can be updated only by comment's author
  'comment.update': function(commentId, message) {
    check(commentId, String);
    check(message, String);
    const comment = getValidatedComment(this.userId, commentId, true);
    comment.message = message;
    comment.save();
  },
  // comment can be removed by author of the idea where it is leaved
  // or by comment's author
  'comment.remove': function(ideaId, commentId, message) {
    check(ideaId, String);
    check(commentId, String);
    check(message, String);
    const idea = getValidatedIdea(this.userId, ideaId);
    const comment = getValidatedComment(this.userId, commentId, false);

    if (idea.userId === this.userId || comment.userId === this.userId) {
      comment.remove();
    } else {
      throw new Meteor.Error('comment.remove.unauthorized',
        'Cannot remove comment if you are not an author of it or author of the idea where it is leaved.');
    }
  }
});
