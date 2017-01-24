import { Meteor } from 'meteor/meteor';
import Person from '../Person';

if (Meteor.isServer) {
  Meteor.publish("person.all", function(){
    return Person.find({});
  });
}
