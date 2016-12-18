import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Specialists = new Mongo.Collection("specialists");

Specialists.allow({
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

const Specialist = Class.create({
  name: 'Specialist',
  collection: Specialists
});

export default Specialists;
