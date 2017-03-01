import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Person from './Person';
import People from './people';
import EmailNotification from '../settings/EmailNotification';

const getValidatedProfile = function(userId) {
  if (!userId) {
    throw new Meteor.Error('profile.update.unauthorized',
      'Cannot update profile if unauthorized.');
  }
  const profile = Person.findOne({userId: userId});
  if (!profile) {
    throw new Meteor.Error('profile.notfound',
      'Cannot find profile for authenticated user.');
  }
  return profile;
}

Meteor.methods({
  'profile.update.notificationEnabled':function(notificationEnabled) {
    check(notificationEnabled, Boolean);
    const profile = getValidatedProfile(this.userId);
    profile.notificationEnabled = notificationEnabled;
    profile.save();
    return profile;
  },
  'profile.update.email':function(email) {
    check(email, ValidEmail);
    const profile = getValidatedProfile(this.userId);
    profile.email = email;
    profile.save();
    return profile;
  },
  'profile.update.firstName':function(firstName) {
    check(firstName, String);
    const profile = getValidatedProfile(this.userId);
    profile.firstName = firstName;
    profile.save();
  },
  'profile.update.lastName':function(lastName) {
    check(lastName, String);
    const profile = getValidatedProfile(this.userId);
    profile.lastName = lastName;
    profile.save();
  },
  'profile.update.city':function(city) {
    check(city, String);
    const profile = getValidatedProfile(this.userId);
    profile.location = profile.location || {};
    profile.location.city = city;
    profile.save();
  },
  'profile.update.country':function(country) {
    check(country, String);
    const profile = getValidatedProfile(this.userId);
    profile.location = profile.location || {};
    profile.location.country = country;
    profile.save();
  },
  'profile.update.headline':function(headline) {
    check(headline, String);
    const profile = getValidatedProfile(this.userId);
    profile.headline = headline;
    profile.save();
  },
  'profile.update.aboutMe':function(aboutMe) {
    check(aboutMe, String);
    const profile = getValidatedProfile(this.userId);
    profile.aboutMe = aboutMe;
    profile.save();
  },
  'profile.remove':function() {
    const profile = getValidatedProfile(this.userId);
    const settings = EmailNotification.findOne({userId: this.userId});
    settings.remove();
    const p = profile.remove();
    Meteor.users.remove({_id: this.userId});
    return p;
  },
  'person.idea.bookmark.add':function(ideaId) {
    check(ideaId, String);

    if (!this.userId) {
      throw new Meteor.Error('person.bookmark.idea.unauthorized',
        'Cannot bookmark an idea if unauthorized.');
    }
    // check if there is an idea in the database with ideaId specified
    const idea = Idea.findOne({_id: ideaId});
    if (!idea) {
      throw new Meteor.Error('person.bookmark.idea.notfound',
        'Cannot find an idea by specified id.');
    }
    //People.update({_id: this.userId }, { $addToSet: { bookmarkIdeas: ideaId }});
    const person = Person.findOne({userId: this.userId});
    if (person.bookmarkIdeas) {
      if (person.bookmarkIdeas.indexOf(ideaId) == -1) {
        person.bookmarkIdeas.push(ideaId);
      }
    } else {
      person.bookmarkIdeas = [ideaId];
    }
    person.save();
  },
  'person.idea.bookmark.remove':function(ideaId) {
    check(ideaId, String);

    if (!this.userId) {
      throw new Meteor.Error('person.bookmark.idea.unauthorized',
        'Cannot bookmark an idea if unauthorized.');
    }
    // check if there is an idea in the database with ideaId specified
    const idea = Idea.findOne({_id: ideaId});
    if (!idea) {
      throw new Meteor.Error('person.bookmark.idea.notfound',
        'Cannot find an idea by specified id.');
    }
    //People.update({_id: this.userId }, { $addToSet: { bookmarkIdeas: ideaId }});
    const person = Person.findOne({userId: this.userId});
    if (person.bookmarkIdeas) {
      let index = person.bookmarkIdeas.indexOf(ideaId);
      if (index != -1) {
        person.bookmarkIdeas.splice(index, 1);
        person.save();
      }
    }
  },
  'people.suggestions':function(keyword) {
    check(keyword, String);
    return People.find({$text: { $search: keyword }}, {limit: 5}).fetch();
  }
});
