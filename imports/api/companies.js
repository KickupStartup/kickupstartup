import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Companies = new Mongo.Collection("companies");

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

const Company = Class.create({
  name: 'Company',
  collection: Companies
});

export default Companies;
