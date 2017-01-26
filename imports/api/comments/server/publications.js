import { Meteor } from 'meteor/meteor';
import Comment from '../Comment';
import Person from '../../people/Person';

if (Meteor.isServer) {
  Meteor.publish("comments.byidea", function(ideaId) {
    return Comment.find({ideaId: ideaId}, {sort: {date_created: -1}});
  });
  Meteor.publishComposite('comments.withAuthor', function(ideaId) {
    return {
      find: function() {
        return Comment.find({ideaId: ideaId}, {sort: {date_created: -1}});
      },
      children: [{
        find: function(comment) {
          // Find post author. Even though we only want to return
          // one record here, we use "find" instead of "findOne"
          // since this function should return a cursor.
          return Person.find(
            { userId: comment.userId },
            { limit: 1, fields: { firstName: 1, lastName: 1, fullName: 1, userId: 1 } });
        }
      }]
    };
  });
}
