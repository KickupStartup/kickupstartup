import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import Person from '../../api/people/Person';
import EmailNotification from '../../api/emailNotificationSettings/EmailNotification';

const updateProfileFromGoogleService = function(userId, google) {
  const profile = new Person({userId: userId});
  if (!!google.email && google.verified_email) {
    profile.email = google.email;
  }
  profile.firstName = google.given_name;
  profile.lastName = google.family_name;
  profile.picture = google.picture;
  profile.gender = google.gender;
  profile.save();
  return profile;
}

const updateProfileFromVkService = function(userId, vk) {
  const profile = new Person({userId: userId});
  profile.firstName = vk.first_name;
  profile.lastName = vk.last_name;
  profile.save();
  return profile;
}

Accounts.onCreateUser(function(options, user){
  if (options) {
    user.options = options;
  }

  // create person record
  Person.upsert({userId: user._id}, {
    userId: user._id
  });

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
  const errorMessage = 'не смогли определить сервис при помощи которого зарегистрировался пользователь';
  let text = user.services.google ||
            user.services.twitter ||
            user.services.github ||
            user.services.linkedin ||
            errorMessage;

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
