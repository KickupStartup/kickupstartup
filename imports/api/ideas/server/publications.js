import { Meteor } from 'meteor/meteor';
import Idea from '../Idea';
import Person from '../../people/Person';
import Comment from '../../comments/Comment';

if (Meteor.isServer) {
  Meteor.publishComposite('idea.withAuthorAndComments', function(ideaId) {
    const userId = this.userId;
    return {
      find: function() {
        // get ideas which are not in NEW status or belong to current logged in user if any
        return userId ?
          Idea.find(
            {
              $and: [
                {$or: [{status: {$gt:0}}, {userId: userId}] },
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
            { limit: 1, fields: { firstName: 1, lastName: 1, fullName: 1, userId: 1 } }
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
              {userId: comment.userId},
              { limit: 1, fields: { firstName: 1, lastName: 1, fullName: 1, userId: 1 }}
            );
          }
        }]
      }]
    };
  });

  Meteor.publishComposite('ideas.withAuthorAndCommentsCount', function() {
    const userId = this.userId;
    return {
      find: function() {
        // get ideas which are not in NEW status or belong to current logged in user if any
        return userId ?
          Idea.find({ $or: [{status: {$gt:0}}, {userId: userId}] }, {sort: {createdAt: -1}}) :
          Idea.find({status: {$gt:0}}, {sort: {createdAt: -1}});
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
            { limit: 1, fields: { firstName: 1, lastName: 1, fullName: 1, userId: 1 } });
        }
      }, {
        find: function(idea) {
          // Find idea comments
          return Comment.find({ideaId: idea._id}, {sort: {createdAt: -1}});
        }
      }]
    };
  });
}
