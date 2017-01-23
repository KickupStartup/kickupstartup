import { Mongo } from 'meteor/mongo';

const People = new Mongo.Collection("people");

People.allow({
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

export default People;
