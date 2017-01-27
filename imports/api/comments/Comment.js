import { Meteor } from 'meteor/meteor';
import { Class, Enum } from 'meteor/jagi:astronomy';
import Comments from './comments';

const Comment = Class.create({
  name: 'Comment',
  collection: Comments,
  fields: {
    userId: String,
    ideaId: String,
    // author: String,
    message: String
  },
  indexes: {
    userId: {fields:{userId: 1, ideaId: 1}}
  },
  behaviors: {
    timestamp: {}
  }
});

export default Comment;
