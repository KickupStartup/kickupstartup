import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Idea from './Idea';

Meteor.methods({
  'idea.new': function() {
    if (!this.userId) {
      throw new Meteor.Error('idea.new.unauthorized',
        'Cannot create idea if unauthorized.');
    } else {
      // looking for new ideas of currently logged in user
      // which are not yet filled (neither draft nor idea name and problem)
      const idea = Idea.findOne({
        status: 0,
        userId: this.userId,
        name: { $exists: false },
        draft: { $exists: false },
        problem: { $exists: false }});
      if (idea) {
        return idea;
      } else {
        const newIdea = new Idea({ userId: this.userId });
        newIdea.save();
      }
    }
  }
});
