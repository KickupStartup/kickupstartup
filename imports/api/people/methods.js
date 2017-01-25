import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Person from './Person';

Meteor.methods({
  'profile.update':function(firstName, lastName, city, country, headline, aboutMe) {
    const profile = Person.findOne({userId: Meteor.userId()});

    profile.set({
      firstName,
      lastName,
      headline,
      aboutMe
    });

    profile.location = {
      city,
      country
    }
    profile.save();
  }
});
