import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Investors = new Mongo.Collection("investors");

Investors.allow({
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

const Investor = Class.create({
  name: 'Investor',
  collection: Investors
});

export default Investors;
