import { Mongo } from 'meteor/mongo';

const Comments = new Mongo.Collection("comments");

Comments.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return false;
  }
});

export default Comments;
