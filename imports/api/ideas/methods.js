import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Idea, { FormStep, IdeaStatus } from './Idea';
import Person from '../people/Person';

const getValidatedOwnIdea = function(userId, ideaId) {
  if (!userId) {
    throw new Meteor.Error('idea.unauthorized',
      'Cannot perform any action with an idea if unauthorized.');
  } else {
    const idea = Idea.findOne({ userId: userId, _id: ideaId });
    if (!idea) {
      throw new Meteor.Error('idea.notfound',
        'There is no such an idea in our database.');
    } else {
      if (!idea.isAuthor(userId)) {
        throw new Meteor.Error('idea.unauthorized',
          'Cannot perform any action with an idea if you are not an author.');
      } else {
        return idea;
      }
    }
  }
}

const getValidatedIdea = function(userId, ideaId) {
  if (!userId) {
    throw new Meteor.Error('idea.unauthorized',
      'Cannot perform any action with an idea if unauthorized.');
  } else {
    const idea = Idea.findOne({_id: ideaId });
    if (!idea) {
      throw new Meteor.Error('idea.notfound',
        'There is no such an idea in our database.');
    } else {
      return idea;
    }
  }
}

Meteor.methods({
  'idea.new': function() {
    const userId = this.userId;

    if (!userId) {
      throw new Meteor.Error('idea.new.unauthorized',
        'Cannot create idea if unauthorized.');
    } else {
      // looking for new ideas of currently logged in user
      // which are not yet filled (neither draft nor idea name and problem)
      const idea = Idea.findOne({
        status: 0,
        userId: userId,
        name: { $exists: false }});

      if (idea) {
        return idea;
      } else {
        const newIdea = new Idea({ userId: userId });
        newIdea.save();
        return newIdea;
      }
    }
  },
  'idea.update.name': function(ideaId, name) {
    check(ideaId, String);
    check(name, String);

    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.name = name;
    idea.save();
    return idea;
  },
  'idea.update.draft': function(ideaId, draft) {
    check(ideaId, String);
    check(draft, String);

    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.draft = draft;
    idea.save();
    return idea;
  },
  'idea.update.problem': function(ideaId, problem) {
    check(ideaId, String);
    check(problem, String);

    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.problem = problem;
    idea.save();
    return idea;
  },
  'idea.update.solution': function(ideaId, solution) {
    check(ideaId, String);
    check(solution, String);

    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.solution = solution;
    idea.save();
    return idea;
  },
  'idea.update.story': function(ideaId, story) {
    check(ideaId, String);
    check(story, String);

    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.story = story;
    idea.save();
    return idea;
  },
  'idea.update.customer': function(ideaId, market, geographic, demographic, gender) {
    check(ideaId, String);
    check(market, Number);
    check(geographic, [Number]);
    check(demographic, [Number]);
    check(gender, Number);

    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.customer = {
      market: market,
      geographic: geographic,
      gender: gender,
      demographic: demographic
    };
    idea.save();
    return idea;
  },
  'idea.publish': function(ideaId) {
    check(ideaId, String);
    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.public = true;
    idea.status = IdeaStatus.WAITING;
    idea.save();
    return idea;
  },
  'idea.unpublish': function(ideaId) {
    check(ideaId, String);
    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.public = false;
    idea.status = IdeaStatus.NEW;
    idea.save();
    return idea;
  },
  'idea.remove': function(ideaId) {
    check(ideaId, String);
    const idea = getValidatedOwnIdea(this.userId, ideaId);
    idea.remove();
    return;
  },
  'idea.author.add': function(ideaId, authorId) {
    check(ideaId, String);
    check(authorId, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    const author = Person.findOne({userId: authorId});
    if (!author) {
      throw new Meteor.Error('idea.author.notfound',
        'There is no such a person in the database.');
    } else {
      // idea's owner can add coauthors,
      // but if there is an approval from owner
      // for current user he can add himself as coauthor
      // if (idea.userId !== this.userId) {
      //   throw new Meteor.Error('idea.author.remove.unauthorized',
      //     'Only idea\'s author can add coauthors.');
      // }
      // save to idea's authors
      idea.authors = idea.authors || [];
      if (idea.authors.indexOf(authorId) === -1) {
        idea.authors.push(authorId);
        idea.save();
      }
      // save to author's ideas
      author.ideas = author.ideas || [];
      if (author.ideas.indexOf(ideaId) === -1) {
        author.ideas.push(ideaId);
        author.save();
      }
      return idea;
    }
  },
  'idea.author.remove': function(ideaId, authorId) {
    check(ideaId, String);
    check(authorId, String);

    const idea = getValidatedIdea(this.userId, ideaId);
    const author = Person.findOne({userId: authorId});
    if (!author) {
      throw new Meteor.Error('idea.author.notfound',
        'There is no such a person in the database.');
    } else {
      if (idea.userId !== this.userId && authorId !== this.userId) {
        throw new Meteor.Error('idea.author.remove.unauthorized',
          'It is only possible to remove yourself from authors or be removed by idea\'s owner.');
      }
      // remove from idea's authors
      if (idea.authors) {
        if (idea.authors.indexOf(authorId) >= 0) {
          idea.authors.splice(idea.authors.indexOf(authorId), 1);
          idea.save();
        }
      }
      // remove from person's ideas
      if (author.ideas) {
        if (author.ideas.indexOf(ideaId) >= 0) {
          author.ideas.splice(author.ideas.indexOf(ideaId), 1);
          author.save();
        }
      }
      return idea;
    }
  }
});
