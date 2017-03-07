import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Person, { Gender } from '../../api/people/Person';
import People from '../../api/people/people';
import EmailNotificationSettings from '../../api/settings/emailNotificationSettings';
import EmailNotification from '../../api/settings/EmailNotification';

const parseGender = function(string) {
  check(string, String);
  if (string.toLowerCase() === 'male') {
    return Gender.MALE;
  }
  if (string.toLowerCase() === 'female') {
    return Gender.FEMALE;
  }
  return Gender.UNSPECIFIED;
}

export const createProfile = function(user) {
  check(user, Object);

  const profile = {};

  if('services' in user) {
    if ('google' in user.services) {
      Object.assign(profile, getGoogleServiceInfo(user));
    } else if ('facebook' in user.services) {
      Object.assign(profile, getFacebookServiceInfo(user));
    } else if ('twitter' in user.services) {
      Object.assign(profile, getTwitterServiceInfo(user));
    } else if ('vk' in user.services) {
      Object.assign(profile, getVkServiceInfo(user));
    }
  }
  let email = !!user.emails ? user.emails[0].address : undefined;

  const selector = {userId: user._id};
  const existentProfile = Person.findOne(selector);
  if (!existentProfile) {
    Object.assign(profile, selector);
    const person = new Person(profile);
    person.save();
  }
  const existentNotificationSettings = EmailNotification.findOne(selector);
  if (!existentNotificationSettings) {
    const settings = new EmailNotification(selector);
    settings.email = email;
    settings.save();
  }
}

const getGoogleServiceInfo = function(user) {
  check(user, Object);
  const service = user.services.google;
  const info = {};
  if (!!service.email && service.verified_email) {
    user.emails = user.emails || [];
    user.emails.push({address: service.email, verified: true});
  }
  info.firstName = service.given_name;
  info.lastName = service.family_name;
  info.picture = service.picture;
  info.gender = parseGender(service.gender);
  return info;
}

const getVkServiceInfo = function(user) {
  check(user, Object);
  const service = user.services.vk;
  const info = {};
  if (!!service.email) {
    user.emails = user.emails || [];
    user.emails.push({address: service.email, verified: true});
  }
  info.firstName = service.first_name;
  info.lastName = service.last_name;
  info.picture = service.photo_big;
  info.gender = Gender[service.sex];
  return info;
}

const getFacebookServiceInfo = function(user) {
  check(user, Object);
  const service = user.services.facebook;
  const info = {};
  if (!!service.email) {
    user.emails = user.emails || [];
    user.emails.push({address: service.email, verified: true});
  }
  info.firstName = service.first_name;
  info.lastName = service.last_name;
  info.gender = parseGender(service.gender);
  return info;
}

const getTwitterServiceInfo = function(user) {
  check(user, Object);
  const service = user.services.twitter;
  const info = {};
  info.picture = service.profile_image_url_https;
  return info;
}
