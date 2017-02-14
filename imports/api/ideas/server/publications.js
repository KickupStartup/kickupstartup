import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Idea from '../Idea';
import Person from '../../people/Person';
import Comment from '../../comments/Comment';

if (Meteor.isServer) {
  Meteor.publishComposite('idea.single', function(ideaId) {
    check(ideaId, String);
    const userId = this.userId;
    return {
      find: function() {
        // get ideas which are not in NEW status or belong to current logged in user if any
        return userId ?
          Idea.find(
            {
              $and: [
                {$or: [{status: {$gt:0}}, {userId: userId}, {authors: { $in: [userId]}}] },
                {_id: ideaId}
              ]
            }, {limit: 1}) :
          Idea.find({status: {$gt:0}, _id: ideaId}, {limit: 1});
      },
      children: [{
        find: function(idea) {
          // Find idea author.
          // Limit fields to first, last and full names.
          // Even though we only want to return
          // one record here, we use "find" instead of "findOne"
          // since this function should return a cursor.
          return Person.find(
            { userId: idea.userId },
            { limit: 1 }
          );
        }
      }, {
        find: function(idea) {
          // Find idea comments
          return Comment.find({ideaId: idea._id}, {sort: {createdAt: -1}});
        },
        children: [{
          find: function(comment) {
            // find comment author
            return Person.find(
              { userId: comment.userId },
              { limit: 1 }
            );
          }
        }]
      }]
    };
  });

  Meteor.publishComposite('ideas.all', function() {
    const userId = this.userId;
    return {
      find: function() {
        // get ideas which are not in NEW status or belong to current logged in user if any
        return Idea.find({status: {$gt:0}}, {sort: {createdAt: -1}});
      },
      children: [{
        find: function(idea) {
          // Find idea author.
          // Limit fields to first, last and full names.
          // Even though we only want to return
          // one record here, we use "find" instead of "findOne"
          // since this function should return a cursor.
          return Person.find(
            { userId: idea.userId },
            { limit: 1 }
          );
        }
      }, {
        find: function(idea) {
          // Find idea comments
          return Comment.find({ideaId: idea._id}, {sort: {createdAt: -1}});
        }
      }]
    };
  });

  Meteor.publishComposite('ideas.bookmarked', function() {
    if (!this.userId) {
      return;
    }
    const userId = this.userId;
    return {
      find: function() {
        return Person.find(
          { userId: userId },
          { limit: 1 }
        );
      },
      children: [{
        find: function(person) {
          if (!person.bookmarkIdeas) {
            return;
          }
          return Idea.find(
            { _id: { $in: person.bookmarkIdeas } }
          );
        },
        children: [{
          find: function(idea) {
            return Comment.find({ideaId: idea._id});
          }
        }, {
          find: function(idea) {
            return Person.find(
              { userId: idea.userId },
              { limit: 1 }
            );
          }
        }],
      }]
    };
  });

  Meteor.publishComposite('ideas.yours', function() {
    if (!this.userId) {
      return;
    }
    const userId = this.userId;
    return {
      find: function() {
        return Idea.find(
          { $or: [ {authors: { $in: [userId]}}, {userId: userId}] }
        );
      },
      children: [{
        find: function(idea) {
          return Comment.find({ideaId: idea._id}, {sort: {createdAt: -1}});
        }
      }, {
        find: function(idea) {
          // Find idea author.
          return Person.find(
            { userId: idea.userId },
            { limit: 1 }
          );
        }
      }],
    };
  });
}
