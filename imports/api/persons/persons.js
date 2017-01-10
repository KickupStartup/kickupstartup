import { Mongo } from 'meteor/mongo';

const Persons = new Mongo.Collection("persons");

Persons.allow({
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

export default Persons;
