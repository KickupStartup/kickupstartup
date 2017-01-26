import { Meteor } from 'meteor/meteor';
import Comment from '../Comment';

if (Meteor.isServer) {
  Meteor.publish("comments.idea", function(ideaId) {
    return Comment.find({ideaId: ideaId}, {sort: {date_created: -1}});
  });
}
