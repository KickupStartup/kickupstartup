import { Mongo } from 'meteor/mongo';

const Ideas = new Mongo.Collection("ideas");

Ideas.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

export default Ideas;
