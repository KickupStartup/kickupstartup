import { Meteor } from 'meteor/meteor';
import Person from '../Person';
import People from '../people';

if (Meteor.isServer) {
  Meteor.publish("profile", function(){
    return Person.find({ userId: this.userId });
  });
  Meteor.publish("person.byid", function(id){
    return Person.find({ _id: id });
  });
  Meteor.publishComposite("people", {
    find: function() {
      return People.find({}, {sort: {createdAt: -1}});
    }
  });
}
