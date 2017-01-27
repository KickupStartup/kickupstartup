import { Meteor } from 'meteor/meteor';
import Person from '../Person';
import People from '../people';

if (Meteor.isServer) {
  Meteor.publish("person.byid", function(id){
    return Person.find({ _id: id });
  });
  Meteor.publish("person.byuserid", function(id){
    return Person.find({ userId: id });
  });
  Meteor.publishComposite("people", {
    find: function() {
      return People.find({}, {sort: {createdAt: -1}});
    }
  });
}
