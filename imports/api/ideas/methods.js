import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Idea, { FormStep, IdeaStatus } from './Idea';

const getValidatedIdea = function(userId, ideaId) {
  if (!userId) {
    throw new Meteor.Error('idea.update.unauthorized',
      'Cannot update the idea if unauthorized.');
  } else {
    const idea = Idea.findOne({ userId: userId, _id: ideaId });
    if (!idea) {
      throw new Meteor.Error('idea.update.notfound',
        'There is no idea in our database that you want to update.');
    } else {
      if (userId !== idea.userId) {
        throw new Meteor.Error('idea.update.unauthorized',
          'Cannot update the idea if you are not an author.');
      } else {
        return idea;
      }
    }
  }
}

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
  },
  'idea.update.name': function(ideaId, name) {
    check(ideaId, String);
    check(name, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.name = name;
    idea.save();
  },
  'idea.update.draft': function(ideaId, draft) {
    check(ideaId, String);
    check(draft, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.draft = draft;
    idea.save();
  },
  'idea.update.problem': function(ideaId, problem) {
    check(ideaId, String);
    check(problem, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.problem = problem;
    idea.save();
  },
  'idea.update.solution': function(ideaId, solution) {
    check(ideaId, String);
    check(solution, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.solution = solution;
    idea.save();
  },
  'idea.update.story': function(ideaId, story) {
    check(ideaId, String);
    check(story, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.story = story;
    idea.save();
  },
  'idea.update.customer': function(ideaId, market, geographic, demographic, gender) {
    check(ideaId, String);
    check(market, Number);
    check(geographic, [Number]);
    check(demographic, [Number]);
    check(gender, Number);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.customer = {
      market: market,
      geographic: geographic,
      gender: gender,
      demographic: demographic
    };
    idea.save();
  },
  // 'idea.update.nextstep': function(ideaId, currentStep) {
  //   check(ideaId, String);
  //   check(currentStep, Number);
  //
  //   const idea = getValidatedIdea(this.userId, ideaId);
  //   if (idea.step === currentStep) {
  //     idea.step += 4;
  //   }
  //   idea.save();
  // },
  'idea.publish': function(ideaId) {
    check(ideaId, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    idea.public = true;
    idea.status = IdeaStatus.WAITING;
    idea.save();
  }
});
