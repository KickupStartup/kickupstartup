import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import Person, { Gender } from '../../api/people/Person';
import EmailNotification from '../../api/settings/EmailNotification';

const parseGender = function(string) {
  let result = Gender.UNSPECIFIED;
  if (string.toLowerCase() === 'male') {
    result = Gender.MALE;
  }
  if (string.toLowerCase() === 'female') {
    result = Gender.FEMALE;
  }
  return result;
}

const createProfileFromGoogleService = function(profile, google) {
  //const profile = new Person({userId: userId});
  if (!!google.email && google.verified_email) {
    profile.email = google.email;
    Accounts.addEmail(profile.userId, google.email, true);
  }
  profile.firstName = google.given_name;
  profile.lastName = google.family_name;
  profile.picture = google.picture;
  profile.gender = parseGender(google.gender);
  profile.save();
  //return profile;
}

const createProfileFromVkService = function(profile, vk) {
  //const profile = new Person({userId: userId});
  if (!!vk.email) {
    profile.email = vk.email;
    Accounts.addEmail(profile.userId, vk.email, true);
  }
  profile.firstName = vk.first_name;
  profile.lastName = vk.last_name;
  profile.picture = vk.photo_big;
  profile.gender = Gender[vk.sex];
  profile.save();
  //return profile;
}

const createProfileFromFacebookService = function(profile, fb) {
  //const profile = new Person({userId: userId});
  if (!!fb.email) {
    profile.email = fb.email;
    Accounts.addEmail(profile.userId, fb.email, true);
  }
  profile.firstName = fb.first_name;
  profile.lastName = fb.last_name;
  profile.picture = fb.photo_big;
  profile.gender = parseGender(fb.gender);
  profile.save();
  //return profile;
}

const createProfileFromTwitterService = function(profile, twitter) {
  //const profile = new Person({userId: userId});
  profile.picture = twitter.profile_image_url_https;
  profile.save();
  //return profile;
}

Accounts.onCreateUser(function(options, user){
  if (options) {
    user.options = options;
  }

  const profile = new Person({userId: user._id});
  if('services' in user) {
    if ('google' in user.services) {
      createProfileFromGoogleService(profile, user.services.google);
    }
    if ('facebook' in user.services) {
      createProfileFromFacebookService(profile, user.services.facebook);
    }
    if ('twitter' in user.services) {
      createProfileFromTwitterService(profile, user.services.twitter);
    }
    if ('vk' in user.services) {
      createProfileFromVkService(profile, user.services.vk);
    }
  }
  console.log("profile: ", profile);


  EmailNotification.upsert({userId: user._id}, {
    userId: user._id
  });

  Meteor.call("message.welcome", user._id, function(error, result){
    if(error){
      console.log("error adding welcome message", error);
    }
    if(result){

    }
  });

  let mail = {};
  let text = 'заглушка';

  if (text !== errorMessage) {
    text = JSON.stringify(text, {indent: true});
  }
  mail.text = text.toString();
  mail.to = [
    //'vh@kickupstartup.com',
    //'aa@kickupstartup.com',
    'v.hatalski@gmail.com'//,
    //'a.a@tutanota.com'
  ];
  mail.subject = 'зарегистрировался новый пользователь';

  Meteor.call("sendEmail", mail, function(error, result){
    if(error){
      console.log("error", error);
    }
    if(result){
      console.log("Notification has been sent.");
    }
  });

  return user;
});
