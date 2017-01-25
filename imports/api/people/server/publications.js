import { Meteor } from 'meteor/meteor';
import Person from '../Person';

if (Meteor.isServer) {
  Meteor.publish("person.all", function(){
    return Person.find({}, {sort: {date_created: -1}});
  });
  Meteor.publish("person.byid", function(id){
    return Person.find({ _id: id });
  });
}
