import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Person from '../Person';
import People from '../people';

if (Meteor.isServer) {
  Meteor.publish("profile", function() {
    return Person.find({ userId: this.userId });
  });
  Meteor.publish("person.byid", function(id) {
    check(id, String);
    return Person.find({ _id: id });
  });
  Meteor.publishComposite("people", {
    find: function() {
      return People.find({}, {sort: {createdAt: -1}});
    }
  });
  Meteor.publish("people.searchByName", function(keyword) {
    check(keyword, String);
    if (keyword.length > 1) {
      return People.find({$text: { $search: keyword }}, {limit: 5});
    } else {
      return;
    }
  });
  Meteor.publish("people.byids", function(ids) {
    check(ids, Array);
    if (ids) {
      return People.find({ userId: { $in: ids } });
    } else {
      return;
    }
  });
}
