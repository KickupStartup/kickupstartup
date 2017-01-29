import { Mongo } from 'meteor/mongo';

export default const Companies = new Mongo.Collection("companies");

Companies.allow({
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
